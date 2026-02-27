import mergeOptions from "./options";
import { isObject } from "../../isObject";
import type { MergeOptions } from "./types/MergeOptions";

type Object = Record<string, any>;

export function mergeDeep(
    object: Object,
    source: Object | Object[],
) {
    let sources = source as Object[];

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
    object: Object,
    source: Object | Object[],
    options?: MergeOptions,
) {
    let sources = source as Object[];

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
