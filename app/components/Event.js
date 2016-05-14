import React from 'react';

function Event() {

  return {
    
    render() {
      const events = this.props.events;
      // console.log(this.props.params.eventid);

      if(this.props.events !== undefined && this.props.events.length > 0) {
        const events = this.props.events;
        const event = events.filter((u) => {
          return u.fields.slug === this.props.params.eventid;
        })[0].fields;
        console.log("event", event);
        
        return (
          <h1>{event.title}</h1>
        )
      } else {
        return (
          <div>Event not found</div>
        )
      }
    }
   
  }
}

export default Event;