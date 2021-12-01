import React from "react";
import '../css/signup.css'

export default function Signup() {
  return (
    <>
      <div id="prachi" className="container">
        <form className="form-horizontal" role="form">
          <h2>Registration</h2>
          <div className="form-group">
            <label for="firstName" className="col-sm-3 col-xs-12 control-label">
              First Name
            </label>
            <div className="col-sm-9 col-xs-12">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="form-control"
                autofocus
              />
            </div>
          </div>
          <div className="form-group">
            <label for="lastName" className="col-sm-3 col-xs-12 control-label">
              Last Name
            </label>
            <div className="col-sm-9 col-xs-12">
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="form-control"
                autofocus
              />
            </div>
          </div>
          <div className="form-group">
            <label for="email" className="col-sm-3 col-xs-12 control-label">
              Email*{" "}
            </label>
            <div className="col-sm-9 col-xs-12">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="form-control"
                name="email"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="password" className="col-sm-3 col-xs-12 control-label">
              Password*
            </label>
            <div className="col-sm-9 col-xs-12">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="password" className="col-sm-3 col-xs-12 control-label">
              Confirm Password*
            </label>
            <div className="col-sm-9 col-xs-12">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="birthDate" className="col-sm-3 col-xs-12 control-label">
              Date of Birth*
            </label>
            <div className="col-sm-9 col-xs-12">
              <input type="date" id="birthDate" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label
              for="phoneNumber"
              className="col-sm-3 col-xs-12 control-label"
            >
              Phone number{" "}
            </label>
            <div className="col-sm-9 col-xs-12">
              <input
                type="phoneNumber"
                id="phoneNumber"
                placeholder="Phone number"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="Height" className="col-sm-3 col-xs-12 control-label">
              State{" "}
            </label>
            <div className="col-sm-9 col-xs-12">
              <input
                type="text"
                id="state"
                placeholder="Please enter your state"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="weight" className="col-sm-3 col-xs-12 control-label">
              District{" "}
            </label>
            <div className="col-sm-9 col-xs-12">
              <input
                type="number"
                id="district"
                placeholder="Please write your district name"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3 col-xs-12">Gender</label>
            <div className="col-sm-6 col-xs-12">
              <div className="row">
                <div className="col-sm-4">
                  <label className="radio-inline">
                    <input type="radio" id="femaleRadio" value="Female" />
                    Female
                  </label>
                </div>
                <div className="col-sm-4">
                  <label className="radio-inline">
                    <input type="radio" id="maleRadio" value="Male" />
                    Male
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-9 col-sm-offset-3">
              <span className="help-block">*Required fields</span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
