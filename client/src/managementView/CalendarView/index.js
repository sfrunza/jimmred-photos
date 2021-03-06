import React, { useCallback, useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timelinePlugin from "@fullcalendar/timeline";
import {
  Box,
  Container,
  Paper,
  useTheme,
  makeStyles,
  colors,
} from "@material-ui/core";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";
import axios from "axios";
import useIsMountedRef from "src/components/useIsMountedRef";
import Page from "src/components/Page";
import Toolbar from "./Toolbar";
import AddEditEventModal from "./AddEditEventModal";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    // minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  calendar: {
    "& .fc-unthemed th": {
      borderColor: theme.palette.divider,
    },
    "& .fc-unthemed td": {
      borderColor: theme.palette.divider,
    },
    "& .fc-unthemed td.fc-today": {
      backgroundColor: colors.blue[50],
    },
    "& .fc-head": {
      backgroundColor: theme.palette.background.dark,
    },
    "& .fc-body": {
      backgroundColor: theme.palette.background.default,
    },
    "& .fc-axis": {
      ...theme.typography.body2,
    },
    "& .fc-list-item-time": {
      ...theme.typography.body2,
    },
    "& .fc-list-item-title": {
      ...theme.typography.body1,
    },
    "& .fc-list-heading-main": {
      ...theme.typography.h6,
    },
    "& .fc-list-heading-alt": {
      ...theme.typography.h6,
    },
    "& .fc th": {
      borderColor: theme.palette.divider,
    },
    "& .fc-day-header": {
      ...theme.typography.subtitle2,
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary,
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.dark,
    },
    "& .fc-day-top": {
      ...theme.typography.body2,
    },
    "& .fc-highlight": {
      backgroundColor: theme.palette.background.dark,
    },
    "& .fc-event": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.contrastText,
      borderWidth: 2,
      opacity: 0.9,
      "& .fc-time": {
        ...theme.typography.h6,
        color: "inherit",
      },
      "& .fc-title": {
        ...theme.typography.body1,
        color: "inherit",
      },
    },
    "& .fc-list-empty": {
      ...theme.typography.subtitle1,
    },
  },
  container: {
    padding: theme.spacing(0, 0, 10, 0),
  },
}));

function CalendarView() {
  const classes = useStyles();
  const calendarRef = useRef(null);
  const isMountedRef = useIsMountedRef();
  const theme = useTheme();
  const [view, setView] = useState("dayGridMonth");
  const [date, setDate] = useState(moment().toDate());
  const [events, setEvents] = useState(null);
  const [modal, setModal] = useState({
    event: null,
    mode: null,
    open: false,
  });

  const getEvents = useCallback(() => {
    var arr = [];
    axios.get("/api/v1/events").then((response) => {
      if (isMountedRef.current) {
        let data = response.data;
        // '2010-01-01T14:30:00',

        data.map((info) => {
          let formatDay = moment(info.date, "dddd MMM Do, YYYY").format(
            "YYYY-MM-DD"
          );
          let st = formatDay + "T" + info.time;
          arr.push({
            id: info.id,
            name: info.name,
            email: info.email,
            message: info.message,
            subject: info.subject,
            date: moment(info.date, "dddd MMM Do, YYYY").format("YYYY-MM-DD"),
            start: st,
            title: info.service,
          });
          return true;
        });
      }

      setEvents(arr);
    });
  }, [isMountedRef]);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const resetModal = () => {
    setModal({
      event: null,
      mode: null,
      open: false,
    });
  };

  const handleDateToday = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };

  const handleViewChange = (newView) => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.changeView(newView);
      setView(newView);
    }
  };

  const handleDatePrev = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleDateNext = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  const handleEventDelete = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.filter((prevEvent) => prevEvent.id !== eventId)
    );
    resetModal();
  };

  const handleEventSelect = (arg) => {
    const event = events.find((e) => e.id === parseInt(arg.event.id));

    setModal({
      event: { ...event },
      mode: "edit",
      open: true,
    });
  };

  const handleEventEdit = (event) => {
    setEvents((prevEvents) =>
      prevEvents.map((prevEvent) =>
        prevEvent.id === event.id ? event : prevEvent
      )
    );
    resetModal();
  };

  const handleEventResize = ({ event }) => {
    // Call API to update the event in database
    setEvents((prevEvents) =>
      prevEvents.map((prevEvent) =>
        prevEvent.id === event.id
          ? {
              ...prevEvent,
              allDay: event.allDay,
              start: event.start,
              end: event.end,
            }
          : prevEvent
      )
    );
  };

  const handleEventDrop = ({ event }) => {
    // If you add a droppable area, check if event dropped inside or outside of calendar
    // Call API to update the event in database
    setEvents((prevEvents) =>
      prevEvents.map((prevEvent) =>
        prevEvent.id === event.id
          ? {
              ...prevEvent,
              allDay: event.allDay,
              start: event.start,
              end: event.end,
            }
          : prevEvent
      )
    );
  };

  const handleModalClose = () => {
    resetModal();
  };

  if (!events) {
    return null;
  }
  return (
    <Page className={classes.root} title="Calendar">
      <Container className={classes.container}>
        <Toolbar
          date={date}
          onDateNext={handleDateNext}
          onDatePrev={handleDatePrev}
          onDateToday={handleDateToday}
          onViewChange={handleViewChange}
          view={view}
        />
        <Paper className={classes.calendar} component={Box} mt={3} p={2}>
          <FullCalendar
            allDayMaintainDuration
            defaultDate={date}
            defaultView={view}
            droppable
            editable
            eventClick={handleEventSelect}
            eventDrop={handleEventDrop}
            eventLimit
            eventResizableFromStart
            eventResize={handleEventResize}
            events={events}
            timeFormat="h:mm"
            // eventRender={EventDetail}
            header={false}
            height={800}
            ref={calendarRef}
            rerenderDelay={10}
            selectable
            weekends
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              timelinePlugin,
            ]}
          />
        </Paper>
        <AddEditEventModal
          event={modal.event}
          mode={modal.mode}
          onCancel={handleModalClose}
          onDelete={handleEventDelete}
          onEdit={handleEventEdit}
          open={modal.open}
        />
      </Container>
    </Page>
  );
}

export default CalendarView;
