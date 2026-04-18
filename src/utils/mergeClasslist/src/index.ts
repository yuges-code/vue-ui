import config from "./config";
import { parse } from "./parse";

export function mergeClasslist(...args: string[][]): string[]
{
    let result = [] as {
        name: string | undefined;
        type: string | undefined;
        value: string | undefined;
        group: string | undefined;
        breakpoint: string | undefined;
    }[];

    args.forEach((arr) => {
        arr.forEach((classname) => {
            const parsed = parse(classname);

            result = result.map((value) => {
                const conflicts = parsed.group
                    ? config.conflicts?.[parsed.group as keyof typeof config.conflicts]
                    : false;

                if (! conflicts) {
                    return value;
                }

                if (value.group === parsed.group) {
                    return parsed;
                }

                if (value.group && conflicts.includes(value.group)) {
                    return parsed;
                }

                return value
            })

            result.push(parsed);

            result = result.filter((value, index) =>
                index === result.findIndex(item => item.name === value.name)
            );
        });
    });

    return result
        .map((value) => value.name)
        .filter((value) => typeof value === 'string');
}
