import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    setInterval(() => this.tick(), 1000);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    // const style = {height :70, marginTop: 50};

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-success">เพิ่มคลังข้อมูล</h1>
          </div>
          <div className="col-md-4 text-right">
            <h5 className="text-muted mt-4">
              {" "}
              ขณะนี้เวลา {this.state.date.toLocaleTimeString()}{" "}
            </h5>

            <ul className="list-inline">
              <li className="list-group-item list-group-item-action ">
                <Link to="/products">คลังข้อมูล</Link>
              </li>
              <li className="list-group-item list-group-item-action ">
                <Link
                  to={{ pathname: "https://chp-data-site.vercel.app" }}
                  target="_blank"
                >
                  ไปหน้าค้นหาข้อมูล
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
