import React from 'react';
import './Users.css'

const Users = (props) => {
    
    // console.log (props.income)
    // console.log (props.user)
    // console.log (props)
    const { picture, name, location, dob, gender, email, phone} = props.user;
    const handleAddUser = props.handleAddUser;
    // console.log (props.user)
    return (
        <div id="parent"> 
            <div id="userBox" className="no-bullets">
            {/* <h2>This is user component</h2> */}
            
                <li><img src={picture.medium} alt=""/></li>
                <li>Name: {name.first} {name.last}</li>
                <li>Income: {location.street.number}</li>
                <li>Age: {dob.age}</li>
                <li>Gender: {gender}</li>
                <li>Country: {location.country}</li>
                <li>Email: {email}</li>
                <li>Phone: {phone}</li><br/>
                <button onClick={ () => handleAddUser(props.user)}>Add Me</button>
        
        </div>
        </div>
        
    );
};

export default Users;