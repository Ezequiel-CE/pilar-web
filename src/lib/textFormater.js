export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const fomartHability = (name) => {
  return capitalizeFirstLetter(name).replace('-', ' ');
};
