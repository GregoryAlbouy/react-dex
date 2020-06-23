export const pkmnName = (name) => (
  name.replace(/^([a-z])/, (firstLetter) => firstLetter.toUpperCase())
);

export const pkmnID = (i) => i < 10 ? `00${i}`
                                    : i < 100 ? `0${i}`
                                              : i;

export const StatEnum = {
  hp: 'hp',
  attack: 'att',
  defense: 'def',
  'special-attack': 'sAtt',
  'special-defense': 'sDef',
  speed: 'spe'
};

const formatStat = (stat) => ({
  name: StatEnum[stat.stat.name],
  value: stat['base_stat']
});

const formatType = (type) => type.type.name;

export const pkmnStatsFromArray = (rawStats) => rawStats.map(formatStat);

export const pkmnTypesfromArray = (rawTypes) => rawTypes.map(formatType);

export const pkmnDetails = (details) => {
  const { id, name, types, stats, weight, height, sprites } = details;

  return {
    id,
    name,
    types: pkmnTypesfromArray(types),
    stats: pkmnStatsFromArray(stats),
    weight,
    height,
    sprite: sprites['front_default'] }
};