const dateTimeFormat = ({ weekday, year, month, day, language = 'en-US', date } = {}) => {
  if (!date) return null;

  const formatter = new Intl.DateTimeFormat(language, { weekday, year, month, day });
  return formatter.format(date);
}

export default dateTimeFormat;