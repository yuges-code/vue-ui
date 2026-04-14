type Predicate<T = any, U = any> = (value: T, key: U, path: string) => boolean;

export function findDeep<T = any>(
    obj: any,
    predicate: Predicate<T>,
    path: string = ''
): T | undefined {
    if (Array.isArray(obj)) {
        return undefined;
    }

    if (!obj || typeof obj !== 'object') {
        return undefined;
    }

    const keys = Object.keys(obj) as (keyof typeof obj)[];

    for (const key of keys) {
        if (typeof key === 'symbol') {
            return undefined;
        }

        const value = obj[key];
        const currentPath = path ? `${path}.${key}` : `${key}`;

        if (predicate(value, key, currentPath)) return value as T;

        if (value && typeof value === 'object') {
            const result = findDeep(value, predicate, currentPath);
            if (result !== undefined) return result;
        }
    }

    return undefined;
}
