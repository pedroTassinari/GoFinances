import { format } from 'date-fns';

const dateFormat = (date: string) => {
  const formatedDate = format(new Date(date), 'dd/MM/y');

  return formatedDate;
};

export default dateFormat;
