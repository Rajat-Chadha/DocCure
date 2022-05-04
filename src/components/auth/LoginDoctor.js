import React, { useState, Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/authDoctor';

const LoginDoctor = ({ login, isDoctorAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    const onSubmit = async e => {
        e.preventDefault();
        login(email,password);
    }

    // Redirect if login
    if(isDoctorAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <Fragment>
            <section id="Login">
                <div className="container">
                    <div className="common-form" style={{marginLeft:"-11vw"}}>
                        <div className="form-side">
                            <div className="heading-common">
                                <h2 style={{color:"white"}}><strong>Log in Doctor </strong>
                                    <i className="fas fa-sign-in-alt"></i>
                                </h2>
                            </div>
                            <form className='w-100 d-flex flex-column'  onSubmit={e => onSubmit(e)}>
                                <div className="form-group">
                                <label className="label" for="exampleInputEmail1">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Enter your email address." 
                                    name="email"
                                    value={email}
                                    onChange={e => onChange(e)}
                                    style={{width:"100%"}}
                                    required
                                    
                                />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputPassword1">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Enter your password." 
                                    name="password"
                                    minLength="6"
                                    value={password}
                                    onChange={e => onChange(e)}
                                    style={{width:"100%"}}
                                />
                                </div>
                                <input style={{backgroundColor:"rgb(108, 99, 255)"}} type="submit" className="btn btn-info" value="Log In" />
                                <p className='text-center' style={{color:"white"}}>Or {' '}<br/>
                                <Link style={{color:"#738f93"}} to="/registerDoctor">Create a new account</Link></p>
                            </form>
                        </div>
                        <div className="img-side">
                            <img src={require("../../img/doctor8.svg")} alt="" className="register-user" />
                        </div>
                    </div>
                </div>
            </section>    
        </Fragment>
    );
};

LoginDoctor.propTypes ={
    login: PropTypes.func.isRequired,
    isDoctorAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
    isDoctorAuthenticated: state.authDoctor.isDoctorAuthenticated
});

export default connect(mapStateToProps, {login})(LoginDoctor);
