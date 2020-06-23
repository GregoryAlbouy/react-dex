export const arraySum = (array, valueGetter) => {
    const getValue = !valueGetter ? (x) => x : valueGetter

    return array.reduce((acc, curr) => acc + getValue(curr), 0)
}

export const statSum = (stats) => arraySum(stats, (stat) => stat.value)

export const hasTypes = (pkmn, types) => types.reduce((acc, curr) => acc && (pkmn.types.includes(curr) || !curr), true)