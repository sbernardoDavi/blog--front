"use client";

import "./EventDrawer.css";
import { CalendarEvent } from "../Calendar/Calendar";

type Props = {
  date: string;
  events: CalendarEvent[];
  onClose: () => void;
  open: boolean;
};

export default function EventDrawer({ date, events, onClose, open }: Props) {
  return (
    <>
      {open && <div className="ed-overlay" onClick={onClose} />}

      <div className={`ed ${open ? "ed--open" : ""}`}>
        <button className="ed-close" onClick={onClose}>
          ✕
        </button>

        <div className="ed-header">
          <span className="ed-date">{date}</span>
        </div>

        <div className="ed-list">
          {events.length === 0 ? (
            <p className="ed-empty">Nenhum evento neste dia.</p>
          ) : (
            events.map((event, i) => (
              <div key={i} className="ed-card">
                {event.time && <span className="ed-time">{event.time}</span>}
                <h3 className="ed-title">{event.title}</h3>

                {event.description && (
                  <div className="ed-section">
                    <span className="ed-section-label">Informações</span>
                    <p className="ed-section-text">{event.description}</p>
                  </div>
                )}

                {event.location && (
                  <div className="ed-section">
                    <span className="ed-section-label">Localização</span>
                    <p className="ed-section-text">{event.location}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
