import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import { deleteEvent } from '../eventActions';

class EventDashboard extends Component {
 
 handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { selectedEvent } = this.state;
    const { events } = this.props;
    console.log(events);
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            onDeleteEvent={this.handleDeleteEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
         
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events
});

const mapDispatchToProps = {
  deleteEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);
