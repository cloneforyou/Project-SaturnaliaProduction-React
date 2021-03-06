import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default class ReviewsPage extends Component {
  // We'll set up the  array as an empty array to begin with
  state = {
    events: [],
    newEvent: {
      _id: "",
      eventTitle: "",
      eventDescription: "",
      eventImage: ""
    },
    displayEventForm: false
  };

  componentDidMount = () => {
    this.getAllEvents();
  };

  getAllEvents = () => {
    axios.get("/api/events/").then(res => {
      // When the page loads, grab all events from the database
      this.setState({ events: res.data }); // Put these events on the state, so they will render
    });
  };

  createEvent = e => {
    axios
      .post("/api/events/", {
        // Ask the server to create a new event in the database
        eventTitle: this.state.newEvent.eventTitle,
        eventDescription: this.state.newEvent.eventDescription,
        eventImage: this.state.newEvent.eventImage
      })
      .then(res => {
        const eventsList = [this.state.events]; // Copy the old events list into a new one
        eventsList.unshift(res.data); // Grab the new event from the server
        this.setState({
          newEvent: {
            eventTitle: "",
            eventDescription: "",
            eventImage: ""
          },
          displayEventForm: false,
          events: eventsList
        });
      });
    this.getAllEvents();
  };

  //We need to pass in multiple arguments here.  The first is the object of the specific idea that is being changed.
  //And the event object is the special event listener object that has information about the value and name
  handleChange = e => {
    const changeNewEvent = { ...this.state.newEvent };
    // Here we are using bracket syntax instead of dot-notation to transform a specific property
    changeNewEvent[e.target.name] = e.target.value;
    // update the state with our updated event
    this.setState({ newEvent: changeNewEvent });
  };

  handleSignUp = e => {
    e.preventDefault();
    this.createEvent();
  };

  render() {
    return (
      <div>
        <div id="team">
          <div className="containers">
            <h1>
              <p className="text-center">
                Queer volleyball jocks throw beer bust at Woofs
              </p>
            </h1>
            <br />
            <Container className="text-center">
              <Row>
                <Col className="profile-pic text-center">
                  <div className="img-box">
                    <img
                      src="https://www.projectq.us/images/uploads/6_9_19_Possums_Summer_Camp-24.jpg"
                      style={{ width: "50rem", marginBottom: "30px" }}
                      className="img-responsive"
                    />
                  </div>
                  <Card.Title
                    className="text-center"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      marginBottom: "10px",
                      fontSize: "20px"
                    }}
                  >
                    Retrospective: Lucrecia Martel
                  </Card.Title>
                  <Card.Text className="text-center">
                    <p>
                      That’s what the Hotlanta Volleyball Association did on
                      Sunday by throwing a beer bust at Woofs to raise money for
                      the Hotlanta Classic coming up Aug. 3-4. If it’s anything
                      like last year’s tournament, expect a ton of cute guys in
                      town from around the country.
                    </p>

                    <p>
                      And if you’re wanting to pop by Woofs before it moves from
                      its longtime location on Piedmont Road, better get there
                      soon. They’re moving in July.
                    </p>
                    <p>
                      ADE Sound Lab also features the annual Demolition panel
                      with moderator and DJ Dave Clarke alongside a panel of top
                      DJ talent, demo pitches and audiovisual installations,
                      plus a broad range of hardware and software brands to try
                      out. Tickets & more info Tickets for the four day ADE
                      Sound Lab program (€25,-) are available here. The program
                      is also accessible with the ADE card, available here and
                      for ADE Pass and ADE Conference Pass holders, available
                      here.
                    </p>
                  </Card.Text>
                </Col>
              </Row>
            </Container>

            <Container className="text-center" style={{ marginTop: "30px" }}>
              <Row>
                <Col className="profile-pic text-center">
                  <Card class="img-box">
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        fontSize: "20px",
                        marginTop: "19px"
                      }}
                    >
                      Ratings and reviews
                    </Card.Title>
                    <Card.Text>
                      Certificate of Excellence2015 - 2019
                      <br />
                      Conference Pass holders, available here.
                      <br />
                      features the annual Demolition{" "}
                    </Card.Text>
                  </Card>
                </Col>
                <Col className="profile-pic text-center">
                  <Card className="img-box sexy">
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        fontSize: "20px",
                        marginTop: "19px"
                      }}
                    >
                      Location and contact
                    </Card.Title>
                    <Card.Text>
                      1509 Pike Pl Ste 3, Seattle, WA 98101-1526 <br />
                      Website: www.google.com
                      <br />
                      Call: 404-333-5454
                    </Card.Text>
                  </Card>
                </Col>
                <Col className="profile-pic text-center">
                  <Card className="img-box sexy">
                    <Card.Title
                      class="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        fontSize: "20px",
                        marginTop: "19px"
                      }}
                    >
                      Food and ambience
                    </Card.Title>
                    <Card.Text>
                      INCREDIBLY FRESH SEAFOOD <br />
                      Conference Pass holders, available here.
                      <br />
                      features the annual Demolition{" "}
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
            </Container>

            <Container className="text-center" style={{ marginBottom: "30px", marginTop: "30px" }}>
                <Row className="profile-pic text-center">
                  <br />
                  <Col className="card">
                    <p style={{ marginTop: "19px" }}>Reviewed 1 week ago</p>
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Some Spots are Just Special
                    </Card.Title>
                    <Card.Text className="text-center">
                      We travel a lot, and either go to over-priced tourist
                      places, or simple restaurants with outstanding food. We
                      discovered Market Grill on our first trip to Seattle. It
                      is one of my favorites in the world. There are just a few
                      stools and you eat...More <br />
                      Date of visit: May 2019
                    </Card.Text>
                  </Col>
                </Row>
            </Container>

            <Container className="text-center">
                <Row className="profile-pic text-center">
                  <br />
                  <Col className="card">
                    <p style={{ marginTop: "19px" }}>Reviewed 3 weeks ago</p>
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Nice staff, pretty good sandwich
                    </Card.Title>
                    <Card.Text className="text-center">
                      Great chunky chowder with lots of ingredients and friendly
                      staff. The server offered me water, crackers and a seat
                      with the chowder. Wanted to order more food because
                      everything looked good! But the chowder was so filling I
                      didn’t order anything else.
                      <br />
                      Date of visit: May 2019
                    </Card.Text>
                  </Col>
                </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
