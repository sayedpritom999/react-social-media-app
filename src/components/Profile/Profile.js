import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const plusIcon = <FontAwesomeIcon icon={faPlus} />

const Profile = (props) => {
    const {img, name, address, email, phone, income} = props.user;
    // const eventHandler = props.eventHandler;
    return (
        <div className = "profile-container">
            <img className = "profile-picture" src={img} alt=""/>
            <div>
                <h1>{name}</h1>
                <h3>Email: {email}</h3>
                <h4>Phone: {phone}</h4>
                <h4>Address: {address}</h4>
                <h4 >Annual Income: ${income}</h4>
                <button onClick = {() => props.eventHandler(props.user)} className = "add-btn">add friend {plusIcon}</button>
            </div>
        </div>
    );
};

export default Profile;