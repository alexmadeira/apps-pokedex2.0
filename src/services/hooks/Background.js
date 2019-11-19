import { ChangeBg } from '~/services/Utils';
import PokemonsImage from '~/assets/pokemons';

export const changeBG = async img => {
  await ChangeBg(PokemonsImage[img]);
};
