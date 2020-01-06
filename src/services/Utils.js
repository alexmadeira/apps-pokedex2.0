import getColors from 'get-image-colors';

export const ChangeBg = async image => {
  const result = await getColors(image);
  document.getElementById('body').style.background = result[0].hex();
  return true;
};

export const FormatImageName = pokemonData => {
  const { id, name } = pokemonData;
  const formartId = `00${id}`.slice(-3);
  const [formatName] = name.split('-');
  const imageName = formartId + formatName;
  return imageName;
};

export default { ChangeBg, FormatImageName };
