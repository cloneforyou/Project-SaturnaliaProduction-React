import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
          <div className="home-header">
            <div className="banner-text">
              <p>
                World's Favourite
                <br />
                Club Promotion Event
                <br />
                Come let us be your guide
              </p>
            </div>
          </div>

          <div className="fashion-trends">
            <Container>
              <div className="fashion-box">
                <div className="section-title text-center">
                  <h5 style={{ fontWeight: "bold" }}>WHAT WE DO</h5>
                  <h4
                    className="sec2 "
                    style={{ margin: "auto 0", fontWeight: "bold" }}
                  >
                    <div style={{ color: "#ba0e0e" }}>
                      SATURNALIA PRODUCTIONS
                    </div>{" "}
                    IS A ONE-STOP SOLUTION FOR ALL YOUR EVENT NEEDS.
                  </h4>
                </div>
                <p style={{ margin: "auto 100px" }} className="text-center">
                  In ancient Roman times, there existed a festival that
                  celebrated life in honor of the Roman god Saturn. All types of
                  people came together to partake in this revelry and enjoy all
                  of life’s indulgence. Come experience a Roman festival like
                  never before, where we will unite to savor amazing sounds,
                  incredible visuals and a carnival of fun that will have you
                  yearning for more and ready to party and dance the night away.
                </p>
              </div>

              <button className="bus">START BROWSING EVENTS</button>
            </Container>
          </div>

          <div
            id="multi-item-example"
            className="containers carousel slide carousel-multi-item carousel-multi-item-2"
            data-ride="carousel"
          >
            <h1> Latest Events</h1>
            <br />
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/150px180"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>
              </div>

              <div className="carousel-item">
                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/150px180"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>
              </div>
            </div>
            <div className="controls-top text-center">
              <a
                className="black-text"
                href="#multi-item-example"
                data-slide="prev"
              >
                <i className="fas fa-angle-left fa-3x pr-3"></i>
              </a>
              <a
                className="black-text"
                href="#multi-item-example"
                data-slide="next"
              >
                <i className="fas fa-angle-right fa-3x pl-3"></i>
              </a>
            </div>
          </div>

          {/* 
NEWS SECTION */}
          <div
            id="multi-item-example"
            className="containers carousel slide carousel-multi-item carousel-multi-item-2"
            data-ride="carousel"
          >
            <h1> Latest News</h1>
            <br />
            <div class="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/150px180"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>
              </div>

              <div className="carousel-item">
                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/150px180"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="ed">
                    <img
                      className="img-fluid"
                      src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>
              </div>
            </div>
            <div className="controls-top text-center">
              <a
                className="black-text"
                href="#multi-item-example"
                data-slide="prev"
              >
                <i className="fas fa-angle-left fa-3x pr-3"></i>
              </a>
              <a
                className="black-text"
                href="#multi-item-example"
                data-slide="next"
              >
                <i className="fas fa-angle-right fa-3x pl-3"></i>
              </a>
            </div>
          </div>

          {/* REVIEWS */}
          <div
            id="multi-item-example"
            className="containers carousel slide carousel-multi-item carousel-multi-item-2"
            data-ride="carousel"
          >
            <h1> Latest Reviews</h1>
            <br />
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="col-md-3 mb-3">
                  <Card className="ed">
                    <img
                      className="img-fluid"
                      src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/150px180"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="card red">
                    <img
                      className="img-fluid"
                      src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>
              </div>

              <div className="carousel-item">
                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/150px180"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>
              </div>
            </div>
            <div className="controls-top text-center">
              <a
                className="black-text"
                href="#multi-item-example"
                data-slide="prev"
              >
                <i className="fas fa-angle-left fa-3x pr-3"></i>
              </a>
              <a
                className="black-text"
                href="#multi-item-example"
                data-slide="next"
              >
                <i className="fas fa-angle-right fa-3x pl-3"></i>
              </a>
            </div>
          </div>

          {/* GALLERY */}
          <div
            id="multi-item-example"
            className="containers carousel slide carousel-multi-item carousel-multi-item-2"
            data-ride="carousel"
          >
            <h1> Latest Gallery</h1>
            <br />
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="col-md-3 mb-3">
                  <Card className="ed">
                    <img
                      className="img-fluid"
                      src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/150px180"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <div className="card red">
                    <img
                      className="img-fluid"
                      src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </div>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>
              </div>

              <div className="carousel-item">
                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://cdn.theatlantic.com/assets/media/img/mt/2018/01/RTS193GB/lead_720_405.jpg?mod=1533691918/150px180"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1526152229/180512-cathart-tbilisi-hero_zl4phh"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/10/12/1444665090823/7c52dec6-fce9-431e-b079-a07d49f6d2ee-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTUucG5n&s=fb870168d916031df11593bfe9bdef10"
                      alt="Card image cap"
                    />
                    <Card.Title
                      className="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text className="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>

                <div className="col-md-3 mb-3">
                  <Card className="red">
                    <img
                      className="img-fluid"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYi8idP_OKLpSwlW8e3bw4BGfFwRbEKZLdrApFiXmiC4zi-eA"
                      alt="Card image cap"
                    />
                    <Card.Title
                      class="text-center"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        margin: "10px",
                        fontSize: "20px"
                      }}
                    >
                      Retrospective: Lucrecia Martel
                    </Card.Title>
                    <Card.Text class="text-center">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card>
                </div>
              </div>
            </div>
            <div className="controls-top text-center">
              <a
                className="black-text"
                href="#multi-item-example"
                data-slide="prev"
              >
                <i className="fas fa-angle-left fa-3x pr-3"></i>
              </a>
              <a
                className="black-text"
                href="#multi-item-example"
                data-slide="next"
              >
                <i className="fas fa-angle-right fa-3x pl-3"></i>
              </a>
            </div>
          </div>
      </div>
    );
  }
}
