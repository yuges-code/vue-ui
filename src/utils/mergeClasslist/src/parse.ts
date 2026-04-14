import config from "./config";

const separator = {
    grouper: '-',
    modifier: ':',
}

function parseCombinations(classname: string) {
    return classname.split(separator.grouper).map((value, index, array) => {
        if (! value) {
            return false;
        }

        return {
            name: array.slice(0, array.length - index).join('-'),
            value: array.slice(array.length - index, array.length).join('-'),
        };
    });
}

export function parse(classname: string)
{
    const data = {
        name: classname as string | undefined,
        type: undefined as string | undefined,
        value: undefined as string | undefined,
        group: undefined as string | undefined,
        breakpoint: undefined as string | undefined,
    };

    let modifiers = classname.split(separator.modifier);

    if (modifiers[0] && config.breakpoints.includes(modifiers[0])) {
        data.breakpoint = modifiers[0];

        modifiers = modifiers.slice(1);
    }

    if (modifiers[0]) {
        const combinations = parseCombinations(modifiers[0]);

        for(const key of Object.keys(config.groups) as (keyof typeof config.groups)[]) {
            if (! Array.isArray(config.groups[key])) {
                continue;
            }

            let combination = combinations.find((combination) =>
                combination && config.groups[key].find((value) => {
                    if (typeof value === 'string' && value === combination.name && !combination.value) {
                        return true;
                    }

                    if (typeof value === 'object') {
                        for(const key of Object.keys(value) as (keyof typeof value)[]) {
                            if (key != combination.name) {
                                return false;
                            }
                            if (typeof value[key] === 'function') {
                                return (value[key] as (value: any) => boolean)(combination.value);
                            }

                            if (Array.isArray(value[key])) {
                                (value[key] as (string | ((value: any) => boolean))[]).find((item) => {
                                    if (typeof item === 'string') {
                                        return item === combination.value;
                                    }
                                    if (typeof item  === 'function') {
                                        return item(combination.value);
                                    }
                                });
                            }
                        }
                    }
                })
            );

            if (combination) {
                data.group = key;
                data.type = combination.name;
                data.value = combination.value;

                break;
            } else {
                continue;
            }
        }
    }

    return data;
}
