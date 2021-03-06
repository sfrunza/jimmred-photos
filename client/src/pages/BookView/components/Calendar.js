import React, { useState } from "react";
import "react-nice-dates/build/style.css";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";
import moment from "moment";

function Calendar({ setFormState, formState, onNext }) {
  const [isScheduling, setIsScheduling] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduleErr, setScheduleErr] = useState("");

  const timeSlotValidator = (slotTime) => {
    const eveningTime = new Date(
      slotTime.getFullYear(),
      slotTime.getMonth(),
      slotTime.getDate(),
      19,
      0,
      0
    );
    const morningTime = new Date(
      slotTime.getFullYear(),
      slotTime.getMonth(),
      slotTime.getDate(),
      8,
      0,
      0
    );
    const isValid =
      slotTime.getTime() > morningTime.getTime() &&
      slotTime.getTime() < eveningTime.getTime();
    return isValid;
  };

  const handleScheduled = (date) => {
    console.log(date);
    setFormState({
      ...formState,
      values: {
        ...formState.values,
        date: moment(date).format("dddd MMM Do, YYYY"),
        time: moment(date).format("HH:mm:ss"),
      },
    });
    onNext(1);
  };

  return (
    <div>
      <DayTimePicker
        timeSlotSizeMinutes={60}
        timeSlotValidator={timeSlotValidator}
        isLoading={isScheduling}
        isDone={isScheduled}
        err={scheduleErr}
        onConfirm={handleScheduled}
        confirmText="Next"
      />
    </div>
  );
}
export default Calendar;
