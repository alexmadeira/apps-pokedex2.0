import Api from '~/services/Api';

export const findSpecie = async pokemon => {
  const { data } = await Api.get(`pokemon-species/${pokemon}`);

  return data;
};

export const findAll = async () => {
  const {
    data: { count, results },
  } = await Api.get(`pokemon?limit=1000`);

  return { count, results };
};

export const findPokemon = async pokemon => {
  const {
    data,
    data: { id },
  } = await Api.get(`pokemon/${pokemon}`);

  const specie = await findSpecie(id);
  const pokemonData = { ...data, specie };

  return pokemonData;
};
