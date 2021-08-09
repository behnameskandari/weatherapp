export const getDeg = (deg, unit) => {
  if (unit === "C") {
    return `${((deg - 32) * 0.555555556).toFixed(2)}°C`;
  }
  return `${deg.toFixed(2)}°F`;
};

export const getDegWU = (deg, unit) => {
  if (unit === "C") {
    return (deg - 32) * 0.555555556;
  }
  return deg;
};
