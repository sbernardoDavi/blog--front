"use client";

import { useState, useEffect } from "react";
import "./Calendar.css";
import EventDrawer from "../EventDrawer/EventDrawer";

export type CalendarEvent = {
  date: string; // "YYYY-MM-DD"
  title: string;
  time?: string;
  description?: string;
  location?: string;
};

const WEEKDAYS = ["Seg", "Ter", "Qua", "Qui", "Sex"];
const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

type Props = {
  events?: CalendarEvent[];
};

export default function Calendar({ events = [] }: Props) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  function getDaysGrid() {
    const firstDay = new Date(year, month, 1).getDay();
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: (number | null)[] = [];
    for (let i = 0; i < startOffset; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    while (cells.length % 5 !== 0) cells.push(null);
    return cells;
  }

  function getEventsForDay(day: number) {
    const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events.filter((e) => e.date === key);
  }

  function handleMonthChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const val = Number(e.target.value);
    setMonth(val % 12);
    setYear(year + Math.floor(val / 12));
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cells = getDaysGrid();
  const isToday = (day: number) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const drawerDate = selectedDay
    ? `${String(selectedDay).padStart(2, "0")} de ${MONTHS[month]} de ${year}`
    : "";

  return (
    <div className="calendar-wrapper">
      <div className="calendar">
        <div className="calendar-header">
          <span className="calendar-title">
            {MONTHS[month]} de {year}
          </span>
          <select
            className="calendar-select"
            value={month}
            onChange={handleMonthChange}
          >
            {MONTHS.map((month, i) => (
              <option key={i} value={i}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className="calendar-grid">
          {WEEKDAYS.map((d) => (
            <div key={d} className="calendar-weekday">
              {d}
            </div>
          ))}
          {cells.map((day, i) => (
            <div
              key={i}
              onClick={() => day && setSelectedDay(day)}
              className={[
                "calendar-cell",
                !day ? "calendar-cell--empty" : "calendar-cell--clickable",
                day && isToday(day) ? "calendar-cell--today" : "",
                day && selectedDay === day ? "calendar-cell--selected" : "",
              ].join(" ")}
            >
              {day && (
                <>
                  <div className="calendar-day-row">
                    <span className="calendar-day-number">{day}</span>
                    {isToday(day) && (
                      <span className="calendar-today-badge">Hoje</span>
                    )}
                  </div>

                  <div className="calendar-events">
                    {isMobile ? (
                      getEventsForDay(day).length > 0 && (
                        <span className="calendar-event calendar-event--more">
                          Eventos
                        </span>
                      )
                    ) : (
                      <>
                        {getEventsForDay(day)
                          .slice(0, 2)
                          .map((event, j) => (
                            <span key={j} className="calendar-event">
                              {event.title}
                            </span>
                          ))}
                        {getEventsForDay(day).length > 2 && (
                          <span className="calendar-event calendar-event--more">
                            +{getEventsForDay(day).length - 2} eventos
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <EventDrawer
        open={selectedDay !== null}
        date={drawerDate}
        events={selectedDay ? getEventsForDay(selectedDay) : []}
        onClose={() => setSelectedDay(null)}
      />
    </div>
  );
}
