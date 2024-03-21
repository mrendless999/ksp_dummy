import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  // Sample shift data and special duty days
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Shift A',
      start: moment().startOf('day').add(8, 'hours').toDate(),
      end: moment().startOf('day').add(16, 'hours').toDate(),
      allDay: false,
    },
    {
      id: 2,
      title: 'Shift B',
      start: moment().startOf('day').add(16, 'hours').toDate(),
      end: moment().startOf('day').add(24, 'hours').toDate(),
      allDay: false,
    },
    {
      id: 3,
      title: 'Special Duty Day',
      start: moment().add(3, 'days').startOf('day').add(10, 'hours').toDate(),
      end: moment().add(3, 'days').startOf('day').add(18, 'hours').toDate(),
      allDay: false,
    },
  ]);

  return (
    <div style={{ height: '600px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '50px' }}
      />
    </div>
  );
};

export default CalendarComponent;