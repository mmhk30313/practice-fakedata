import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons'
import './ADD.css'
const ADD = (props) => {
    // console.log(props.handleRemovePerson);
    const handleRemove = props.handleRemovePerson;
    const {name,company,image,phone,email,address} = props.person;
    const findYearSalary = (salary) => {
        return salary*12;
    }
    return (
        <div className="person-cart">
            <img src={image} alt=""/><br/>
            <strong><small>Name: {name}</small></strong><br/>
            <small>Salary / Year: ${findYearSalary(company.salary)}</small><br/>
            <small style={{fontSize: '13px',fontWeight: '700'}}>Email: {email}</small><br/>
            <small style={{fontSize: '13px',fontWeight: '700'}}>Phone: {phone}</small><br/>
            <small>Address: {address.street}-{address.city}</small><br/>
            <button className="minusBtn" onClick={() => handleRemove(props.person)}><FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon></button>
        </div>
    );
};

export default ADD;