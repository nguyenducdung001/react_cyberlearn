import React, { Component } from "react";
import "./UserProfile.css";
import Swal from "sweetalert2";

export default class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  };

  handleChangeValue = (event) => {
    let { name, value, type } = event.target;
    console.log(name, value);

    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    if (value.trim() == "") {
      newErrors[name] = name + " is required";
    } else {
      newErrors[name] = "";
    }
    if (type == "email") {
      const regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (!regexEmail.test(value)) {
        newErrors[name] = name + " is invalid!";
      } else {
        newErrors[name] = "";
      }
    }

    if (name === "passwordConfirm") {
      if (value === newValues["password"]) {
        newErrors[name] = "";
      } else {
        newErrors[name] = name + " is invalid!";
      }
    }

    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };

  handleSubmit = (event) => {
    // Cản trình duyệt submit reload lại trang
    event.preventDefault();
    // Xét điều kiện submit
    let { values, errors } = this.state;
    // Biến xác định form hợp lệ
    let valid = true;
    let profileContent = "";
    let errorsContent = "";

    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
      profileContent += `
      <p class="text-left"> <b>${key}:</b> ${values[key]}</p>
      `;
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        errorsContent += `
        <p class="text-left"> <b class="text-danger">${key}</b> is invalid!</p>
        `;
        valid = false;
      }
    }

    if (!valid) {
      Swal.fire({
        title: "Error!",
        html: errorsContent,
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      Swal.fire({
        title: "Success!",
        html: profileContent,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#EEEE",
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      >
        <form onSubmit={this.handleSubmit} className="container">
          <h2>UserProfile</h2>
          <div>
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.firstName}
                    type="text"
                    required
                    name="firstName"
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>FirstName</label>
                  <span className="text-left text-danger">
                    {this.state.errors.firstName}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.lastName}
                    type="text"
                    required
                    name="lastName"
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>LastName</label>
                  <span className="text-left text-danger">
                    {this.state.errors.lastName}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="group">
                <input
                  value={this.state.values.userName}
                  className="w-100"
                  type="text"
                  required
                  name="userName"
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>UserName</label>
                <span className="text-left text-danger">
                  {this.state.errors.userName}
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="group">
                <input
                  value={this.state.values.email}
                  className="w-100"
                  type="email"
                  required
                  name="email"
                  onChange={this.handleChangeValue}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
                <span className="text-left text-danger">
                  {this.state.errors.email}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.password}
                    type="password"
                    required
                    name="password"
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Password</label>
                  <span className="text-left text-danger">
                    {this.state.errors.password}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.passwordConfirm}
                    type="password"
                    required
                    name="passwordConfirm"
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>PasswordConfirm</label>
                  <span className="text-left text-danger">
                    {this.state.errors.passwordConfirm}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-dark w-100">Xác Nhận</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
