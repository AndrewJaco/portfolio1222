export const parseSheetDate = (dateValue) => {
  const parts = dateValue.split('/') || dateValue;

  // Handle MM/DD/YYYY format
  if (parts.length === 3) {
    const [month, day, year] = parts;
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }

  return new Date(dateValue);
};
