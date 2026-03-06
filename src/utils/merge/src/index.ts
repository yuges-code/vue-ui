import mergeOptions from "./options";
import { isObject } from "../../isObject";
import type { MergeOptions } from "./types/MergeOptions";

type Object = Record<string, any>;

export function mergeDeep(
    object: Object,
    source: Object | Object[],
) {
    let result = {} as Object;
    let sources = [] as Object[];

    if (Array.isArray(source)) {
        sources = [...source];
    } else {
        sources = [source];
    }

    sources.unshift(object);

    sources.forEach((source) => {
        for (const key in source) {
            const resultValue = result[key];
            const sourceValue = source[key];

            if (Array.isArray(resultValue) && Array.isArray(sourceValue)) {
                result[key] = resultValue.concat(...sourceValue);
            }
            else if (isObject(resultValue) && isObject(sourceValue)) {
                result[key] = mergeDeep(resultValue, sourceValue);
            }
            else {
                result[key] = sourceValue;
            }
        }
    });

    return result;
};

export function mergeDeepWithOptions(
    object: Object,
    source: Object | Object[],
    options?: MergeOptions,
) {
    let result = {} as Object;
    let sources = [] as Object[];

    if (Array.isArray(source)) {
        sources = [...source];
    } else {
        sources = [source];
    }

    sources.unshift(object);

    options = mergeDeep(mergeOptions, options || {});

    sources.forEach((source) => {
        for (const key in source) {
            const resultValue = result[key];
            const sourceValue = source[key];

            if (Array.isArray(resultValue) && Array.isArray(sourceValue)) {
                result[key] = options?.arrays?.concat ? resultValue.concat(...sourceValue) : sourceValue;

                if (options?.arrays?.unique) {
                    result[key] = Array.from(new Set(result[key]));
                }
            }
            else if (isObject(resultValue) && isObject(sourceValue)) {
                result[key] = mergeDeepWithOptions(resultValue, sourceValue, options);
            }
            else {
                result[key] = sourceValue;
            }
        }
    });

    return result;
}
