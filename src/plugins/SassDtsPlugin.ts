import os from 'os';
import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import { type Plugin } from 'vite';
import * as sass from 'sass-embedded';
import selectorParser from 'postcss-selector-parser';
import type { RecursivePartial } from '../types/RecursivePartial';


type PluginOptions = {
    tab: {
        size: number,
        symbol: string,
    },
    source: {
        filename: string,
        directory: string,
    },
    output: {
        filename: string,
        directory: string,
    },
};

const exts = ['.css', '.scss', '.sass'];

function makeConfig<T extends RecursivePartial<PluginOptions>>(options: T)
{
    return {
        tab: {
            size: 4,
            symbol: ' ',
        },
        source: {
            filename: options.source?.filename || 'main.scss',
            directory: options.source?.directory || path.resolve(process.cwd(), './src/assets/'),
        },
        output: {
            filename: options.output?.filename || 'ClassName.ts',
            directory: options.output?.directory || path.resolve(process.cwd(), './src/types/'),
        },
    };
}

function processing(filename: string, options: PluginOptions)
{
    if (! exts.includes(path.extname(filename))) {
        return;
    }

    const file = {
        source: path.resolve(options.source.directory, options.source.filename),
        output: path.resolve(options.output.directory, options.output.filename),
    }

    if (! fs.existsSync(path.dirname(file.output))) {
        fs.mkdirSync(path.dirname(file.output), { recursive:true });
    }

    const result = sass.compile(file.source);
    const root = postcss.parse(result.css);

    const classes = new Set();

    root.walkRules(rule => {
        selectorParser(selectors => {
            selectors.walkClasses(classNode => {
                classes.add(classNode.value);
            });
        }).processSync(rule.selector);
    });

    fs.writeFile(
        file.output,
        compilation(classes, options),
        (error) => {
            if (error) {
                throw error;
            }
        }
    );
}

function compilation(classes: Set<unknown>, options: PluginOptions): string
{
    const tab = options.tab.symbol.repeat(options.tab.size);

    let data = [...classes].map(value => tab + `'${value}': '${value}'`).join(',' + os.EOL);

    const str =
        'export const ClassName = {' + os.EOL +

        data + ',' + os.EOL +

        '} as const;' + os.EOL + os.EOL +
        'export type ClassName = typeof ClassName[keyof typeof ClassName];' + os.EOL;

    return str;
}

export default function SassDtsPlugin(options: RecursivePartial<PluginOptions> = {}): Plugin
{
    const config = makeConfig(options);

    return {
        name: 'vite-plugin-sass-dts',
        watchChange: (id: string) => processing(id, config),
        // transform: (code: string, id: string) => processing(id, config),
    };
}
