import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./service/auth.service";
import demo  from "./component/demo";
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./component/Home";
import Profile from "./component/Profile";
import User from "./component/User";
import Moderator from "./component/Moderator";
import Admin from "./component/Admin";
import './App.css';
import  addSubject from '../src/component/CRUD-Subject/addSubject'
import  subjectComponent from '../src/component/CRUD-Subject/subjectComponent'
import  subjectList from '../src/component/CRUD-Subject/subjectList'
import Title from "antd/lib/skeleton/Title";
const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div style={{width:"1520px"}}>
      <nav className="navbar navbar-expand navbar-dark">
        <div className = "navbar navbar-logo"></div>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Trang chủ
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/create-newTicket"} className="nav-link">
              Đặt Vé
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
                Trả Vé
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Liên Hệ
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator 
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/add-subject"} className="nav-link">
                  Quản lý trả vé khách hàng
              </Link>
            </li>
          )}
          {/* <li className="nav-item">
                <Link to={"/demo"} className="nav-link">
                            Print to Sign Contract
                  </Link>
            </li> */}
          {/* {currentUser && (
            <li className="nav-item">
              <Link to={"/dang-ki-lich-day"} className="nav-link">
                  Đăng kí lịch dạy
              </Link>
            </li>
          )} */}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                Đăng xuất
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                  Đăng nhập
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                  Đăng ký
              </Link>
            </li>
          </div>
        )}
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/create-newTicket" component={addSubject} />
          <Route path="/mod" component={Moderator} />
          <Route path="/create-ticket" component={Admin} />
          <Route path="/demo" component={demo} />
        </Switch>
      </div>
    </div>
    
  );
};

export default App;

