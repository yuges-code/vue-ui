export function isObject(value: any): boolean
{
    if (! value) {
        return false;
    }

    return typeof value === 'object';
}
