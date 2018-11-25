import { Link } from "react-router-dom";
import "./SideBar.css";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: "/login"
    };
  }
  getUsernameWithoutHost() {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    let userArray = this.props.currentUser.split("@");
    let currentUser = userArray[0];
    return currentUser;
  }

  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        {loggedIn ? (
          <aside className="menu is-display-none">
            <img
              className="school-logo"
              src={require("./images/hopewell.png")}
            />
            <h2 className="student-name-tag has-text-centered">
              {this.getUsernameWithoutHost()}
            </h2>
            <h4 className="student-id has-text-centered">7508719</h4>
            <ul className="menu-list">
              <li>
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" ? " is-current" : ""
                  }
                >
                  <div className="has-text-left">
                    <i
                      className="sidebar-icons fa fa-home"
                      aria-hidden="true"
                    />{" "}
                    <div className="side-link-text"> Home</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/attendance"
                  className={
                    window.location.pathname === "/attendance"
                      ? " is-current"
                      : ""
                  }
                >
                  <div className="has-text-left">
                    <i
                      className="sidebar-icons fa fa-calendar-check"
                      aria-hidden="true"
                    />{" "}
                    <div className="side-link-text"> Attendance</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/grades"
                  className={
                    window.location.pathname === "/grades" ? " is-current" : ""
                  }
                >
                  <div className="has-text-left">
                    <i
                      className="sidebar-icons fa fa-graduation-cap m"
                      aria-hidden="true"
                    />
                    <div className="side-link-text"> Grades</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/calendar"
                  className={
                    window.location.pathname === "/calendar"
                      ? " is-current"
                      : ""
                  }
                >
                  <div className="has-text-left">
                    <i
                      className="sidebar-icons fa fa-calendar"
                      aria-hidden="true"
                    />{" "}
                    <div className="side-link-text"> Events Calendar</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className={
                    window.location.pathname === "/contacts"
                      ? " is-current"
                      : ""
                  }
                >
                  <div className="has-text-left">
                    <i
                      className="sidebar-icons fa fa-users"
                      aria-hidden="true"
                    />{" "}
                    <div className="side-link-text"> Contacts</div>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="/forms"
                  className={
                    window.location.pathname === "/forms" ? " is-current" : ""
                  }
                >
                  <div className="has-text-left">
                    <i
                      className="sidebar-icons fa fa-file"
                      aria-hidden="true"
                    />
                    <div className="side-link-text"> Forms</div>
                  </div>
                </Link>
              </li>

              
              <li>
                <Link
                  to="/chat"
                  className={
                    window.location.pathname === "/chat" ? " is-current" : ""
                  }
                >
                  <div className="has-text-left">
                    <i
                      className="sidebar-icons fa fa-link"
                      aria-hidden="true"
                    />
                    <div className="side-link-text"> Chat</div>
                  </div>
                </Link>
              </li>
              
            </ul>
          </aside>
        ) : (
          <div>
            {console.log(loggedIn)}
            <Redirect to={{ pathname: this.state.redirectTo }} />
          </div>
        )}
      </div>
    );
  }
}

export default SideBar;
