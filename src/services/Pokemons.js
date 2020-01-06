import Api from '~/services/Api';

export const findSpecie = async pokemon => {
  const { data } = await Api.get(`pokemon-species/${pokemon}`);

  return data;
};

export const findGeneration = async name => {
  const { data } = await Api.get(`generation/${name}`);

  return data;
};

export const findAll = async () => {
  const {
    data: { count, results },
  } = await Api.get(`pokemon?limit=1000`);

  return { count, results };
};

export const findPokemon = async pokemon => {
  if (!pokemon) return false;
  const {
    data,
    data: { id },
  } = await Api.get(`pokemon/${pokemon}`);

  const specie = await findSpecie(id);

  const {
    generation: { name },
  } = specie;

  const generation = await findGeneration(name);

  const pokemonData = { ...data, specie, generation };

  return pokemonData;
};
