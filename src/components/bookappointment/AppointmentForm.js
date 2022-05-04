import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProfileById} from '../../actions/profile';
import Form from './Form';
import { withRouter } from 'react-router-dom';

const AppointmentForm = ({
    getProfileById,
    profile: {profileById},
    match,
    history
}) => {
    useEffect(() => {
        getProfileById(match.params.id)
    },[getProfileById, match.params.id]);

    return (
        <Fragment>
            <section id="Login">
                <div className="container" style={{paddingTop:"13vw", marginTop:"-7vw", paddingBottom:"10vw"}}>
                    <div className="common-form">
                        <div className="form-side my-4" style={{ width:'40vw'}}>
                            {
                                profileById !== null ? 
                                (
                                    <Form profile={profileById.doctor} timeslots={profileById.timeslots} history={history} doctorId={profileById.doctor._id} />
                                ) : (
                                    ""
                                )
                            }
                        </div>
                        <div className="img-side">
                            <img src={require("../../img/calendar.svg")} alt="" className="register-user" />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

AppointmentForm.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
});

export default connect(mapStateToProps, {getProfileById})(withRouter(AppointmentForm));
