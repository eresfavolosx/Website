$(document).ready(function() {
  $('#calendar').fullCalendar({
    theme: 'bootstrap3',
    defaultView: 'agendaWeek',
    header: {
      center: 'title',
      left: ' prev next, today',
      right: 'agendaDay,agendaWeek,month,listYear'
    },
    googleCalendarApiKey: '',
    events: {
      googleCalendarId: 'bgkpq8smnnnklg7rvav9iqtcac@group.calendar.google.com',
    },
    selectable: true,
    editable: false,
    height: 750,
    fixedWeekCount: false,
  });
});
