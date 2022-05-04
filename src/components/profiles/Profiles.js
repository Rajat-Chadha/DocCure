import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {Dots} from 'react-preloaders';
import ProfileItem from './ProfileItem';
import {getProfiles} from '../../actions/profile';

const Profiles = ({getProfiles, profile: { profiles,loading }}) => {
    useEffect(() => {
        getProfiles();
    },[getProfiles]);
console.log(profiles)
    return (
        <Fragment style={{backgroungColor:"#738f93"}}>
            { loading ? <Spinner /> : 
                <Fragment>
                <section id="profiles-page" style={{overflowY:"scroll", height:"100vh",  marginTop:"-5.5vw", paddingTop:"5vw"}}>
                    <div className="container">
                        <div className="heading-common">
                            <h2><strong>Doctor Profiles</strong></h2>  
                        </div>
                        <h2 className="welcome-heading" style={{color:"#739aae"}}><i className="fas fa-user-md"></i> Book your Appointments</h2>
                        <br />
                        {
                            profiles != null ? (
                                profiles.map(profile => (
                                    <ProfileItem key={profile._id} profile={profile} />
                                ))
                            ) : <h4>No Profiles found..</h4>
                        }
                    </div>
                </section>
                </Fragment>
            }
        </Fragment>
    )
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, {getProfiles})(Profiles);
