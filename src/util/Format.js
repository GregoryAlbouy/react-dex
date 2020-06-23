export const pkmnName = (name) => {
  return name.replace(/^([a-z])/, (firstLetter) => firstLetter.toUpperCase())
}

export const pkmnID = (i) => {
  return i < 10
    ? `00${i}`
    : i < 100
      ? `0${i}`
      : i
}

export const StatEnum = {
  hp: 'hp',
  attack: 'att',
  defense: 'def',
  'special-attack':'sAtt',
  'special-defense': 'sDef',
  speed: 'spe'
}

export const pkmnStatsFromArray = (rawStats) => {
  const formattedStats = rawStats.map((stat) => ({
      name: StatEnum[stat.stat.name],
      value: stat['base_stat']
  }))

  return formattedStats
}

export const pkmnTypesfromArray = (rawTypes) => rawTypes.map((type) => type.type.name)

export const pkmnDetails = (details) => {
  const { id, name, types, stats, weight, height, sprites } = details

  return {
    id,
    name,
    types: pkmnTypesfromArray(types),
    stats: pkmnStatsFromArray(stats),
    // stats,
    weight,
    height,
    sprite: sprites['front_default'] }
}