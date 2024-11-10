import { FC } from 'react';
import Calendar from 'react-calendar';

interface CalendarComponentProps {
  value: Date;
  onChange: () => void;
}

const CalendarComponent: FC<CalendarComponentProps> = ({ onChange, value }) => {
  return <Calendar onChange={onChange} value={value} />;
};

export default CalendarComponent;
