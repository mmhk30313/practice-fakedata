import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Main.css';
const Main = (props) => {
    // console.log(props.data);
    const handlePerson = props.handleData;
    const {name,image,email,phone,address,company,website} = props.data;
    return (
        <div className="person">
            <img src={image} alt=""/><br/>
            <strong>Name: {name}</strong><br/>
            <small>Phone: {phone}</small><br/>
            <small>Email: {email}</small><br/>
            <small>Company: {company.name} -- {company.catchPhrase}</small><br/>
            <small>Salary: ${company.salary}</small><br/>
            <small>Website: {website}</small><br/>
            <small>Address: {address.street}-{address.city}</small><br/>
            <button className="addBtn" onClick={() => handlePerson(props.data)}><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon></button>
        </div>
    );
};

export default Main;