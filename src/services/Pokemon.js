import analyze from 'rgbaster';

export const ChangeBg = async image => {
  const result = await analyze(image, {
    ignore: [
      'rgb(255,255,255)',
      'rgb(0,0,0)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,2)',
    ],
  });

  document.getElementById('body').style.background = result[0].color;
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
