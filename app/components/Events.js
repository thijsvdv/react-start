import React from 'react';
import { Link } from 'react-router';

function Events({events}) {
  // console.log(events);
  
  let renderEvent = (key) => {
    let event = events[key].fields;
    // console.log(event);
    return (
      <li key={key}>
        <Link to={`/event/${event.slug}`}>{event.date} - {event.title}</Link>
      </li>
    )
  }
  
  return (
    <div className="events">
      <h1>Events</h1>
      <ol>
      {Object.keys(events).map(renderEvent.bind(this))}
      </ol>
    </div>
  )
}

export default Events;