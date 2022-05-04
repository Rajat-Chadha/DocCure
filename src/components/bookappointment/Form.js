import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addAppointment } from "../../actions/appointment";
import { Link } from "react-router-dom";
import Slott from "./slot";

const Form = ({ profile, doctorId, history, addAppointment, timeslots }) => {
  const [formData, setFormData] = useState({
    patientname: "",
    fathername: "",
    age: "",
    status: "",
    date: "",
    description: "",
    timeslot:""
    // Slot:''
  });

  const {
    patientname,
    fathername,
    age,
    status,
    date,
    description,timeslot
    // Slot
  } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  return (
    <Fragment>
      <br />

      <div className="heading-common">
        <h2 style={{ color: "white" }}>
          <strong>Book Appointment</strong>
        </h2>
        <p className="lead">
          Provide your details correctly and book your appointment.
        </p>
        <div className="appointment-doctor">
          <img
            className="round-img appointment-img"
            src={profile.avatar}
            alt=""
          />
          <p className="lead" style={{ color: "white" }}>
            <strong>{profile.name}</strong>
          </p>
        </div>
      </div>
      <form
      className="w-100"
        onSubmit={(e) => {
          e.preventDefault();
        //   console.log(formData)
          addAppointment(doctorId, formData, history);
        }}
        style={{ paddingBottom: "10vw" }}
      >
        <small style={{ color: "#738f93" }}>* = required field</small>
        <div className="form-group">
          <input
            type="text"
            className="form-control w-100"
            placeholder="* Patient name"
            name="patientname"
            value={patientname}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="* Father name"
            name="fathername"
            value={fathername}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="* Age"
            name="age"
            value={age}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="* Status"
            name="status"
            value={status}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text" style={{ color: "#738f93" }}>
            Status like profession (eg. student, job etc)
          </small>
        </div>
        <h6 style={{ color: "#738f93" }}>Date</h6>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            name="date"
            placeholder="Date"
            value={date}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <select id="timeslot" name="timeslot" className="form-control" onChange={(e)=>onChange(e)} value={timeslot} defaultValue="Select">
            <option style={{ cursor: "none" }} value="Select">
              Select appropriate time
            </option>

            {timeslots.available.map((item, i) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="* Health Problem Description"
            name="description"
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small style={{ color: "#738f93" }} className="form-text">
            Tell us about the Health Problem.
          </small>
        </div>
        <input type="submit" value="Submit" className="btn btn-info" />{" "}
        <Link
          to="/profiles"
          type="submit"
          className="btn btn-outline-secondary"
        >
          Go Back
        </Link>
      </form>

      <br />
    </Fragment>
  );
};

Form.propTypes = {
  addAppointment: PropTypes.func.isRequired,
};

export default connect(null, { addAppointment })(Form);
