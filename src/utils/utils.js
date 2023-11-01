/*
 * @Autor: lvdy
 * @Date: 2023-10-31 16:15:55
 * @LastEditors: lvdy
 * @LastEditTime: 2023-10-31 16:16:09
 * @Description: 
 */
export function deepCopy(target) {
    if (typeof target == 'object') {
        const result = Array.isArray(target) ? [] : {}
        for (const key in target) {
            if (typeof target[key] == 'object') {
                result[key] = deepCopy(target[key])
            } else {
                result[key] = target[key]
            }
        }

        return result
    }

    return target
}