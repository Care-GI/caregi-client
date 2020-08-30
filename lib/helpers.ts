// recibe un idPharm y te dice tu localidad
export const optionsUbication = (idPharm) => {
  let location;

  switch (idPharm) {
    case "0001-BO-ME":
      location = "Bonanza, Metepec";
      break;
    case "0002-FO-ME":
      location = "Foresta, Metepec";
      break;
    default:
      location = "No encontrada";
  }
  return location;
};
