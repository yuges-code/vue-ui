import mergeOptions from "./options";
import { isObject } from "../../isObject";
import type { YMergeOptions } from "./types/YMergeOptions";

type YObject = Record<string, any>;

export function mergeDeep(
    object: YObject,
    source: YObject | YObject[],
) {
    let sources = source as YObject[];

    if (! Array.isArray(source)) {
        sources = [source];
    }

    sources.forEach((source) => {
        for (const key in source) {
            const objectValue = object[key];
            const sourceValue = source[key];

            if (Array.isArray(objectValue) && Array.isArray(sourceValue)) {
                object[key] = objectValue.concat(...sourceValue);
            }
            else if (isObject(objectValue) && isObject(sourceValue)) {
                object[key] = mergeDeep(objectValue, sourceValue);
            }
            else {
                object[key] = sourceValue;
            }
        }
    });

    return object;
};

export function mergeDeepWithOptions(
    object: YObject,
    source: YObject | YObject[],
    options?: YMergeOptions,
) {
    let sources = source as YObject[];

    if (! Array.isArray(source)) {
        sources = [source];
    }

    options = mergeDeep(mergeOptions, options || {});

    sources.forEach((source) => {
        for (const key in source) {
            const objectValue = object[key];
            const sourceValue = source[key];

            if (Array.isArray(objectValue) && Array.isArray(sourceValue)) {
                object[key] = options?.arrays?.concat ? objectValue.concat(...sourceValue) : sourceValue;

                if (options?.arrays?.unique) {
                    object[key] = Array.from(new Set(object[key]));
                }
            }
            else if (isObject(objectValue) && isObject(sourceValue)) {
                object[key] = mergeDeep(objectValue, sourceValue);
            }
            else {
                object[key] = sourceValue;
            }
        }
    });

    return object;
}
