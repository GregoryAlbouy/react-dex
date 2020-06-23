const PKMN_LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=807';

export const getPkmnDetails = async (url) => (await fetch(url)).json();

export const getPkmnList = async () => (await getPkmnDetails(PKMN_LIST_URL)).results;