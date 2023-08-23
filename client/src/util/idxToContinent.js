export const arrContinent = [
    'Maharashtra',
    'Karnataka',
    'Uttar Pradesh',
    'Madhya Prdesh',
    'Rajasthan',
    'Uttarakhand'
]

export const continentToIdx = (continent) => {
    return arrContinent.findIndex((cont) => cont.toLowerCase() === continent.toLowerCase())
}

export const idxToContinent = (idx) => {
    return (arrContinent.filter((_, index) => index === Number(idx)))[0]
}