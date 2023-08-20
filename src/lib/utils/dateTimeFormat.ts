export interface IDataTimeFormat {
  weekday?: Intl.DateTimeFormatOptions['weekday']
  year?: Intl.DateTimeFormatOptions['year'];
  month?: Intl.DateTimeFormatOptions['month'];
  day?: Intl.DateTimeFormatOptions['day'];
  language?: string;
  date: Date;
}

const dataTimeFormat = ({
  day,
  weekday,
  month,
  year,
  date,
  language = 'en-US',
}: IDataTimeFormat): string => {
  const formatter = new Intl.DateTimeFormat(language, { weekday, year, month, day });
  return formatter.format(date);
}

export default dataTimeFormat;