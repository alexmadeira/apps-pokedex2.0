import { ChangeBg } from '~/services/Utils';
import PokemonsImage from '~/assets/pokemons';
import { usePokemon } from '~/services/hooks/Pokemon';

const changeBGColor = async imagFormat => {
  await ChangeBg(PokemonsImage[imagFormat]);
};

export default function BG() {
  const { imagFormat } = usePokemon();
  if (imagFormat) {
    changeBGColor(imagFormat);
  }
  return '';
}
