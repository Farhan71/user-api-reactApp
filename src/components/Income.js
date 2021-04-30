import React from 'react';

const Income = (props) => {
    // console.log (props.income)
    const users = props.income;
    let totalIncome = 0;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        totalIncome = totalIncome + user.location.street.number
        
    }
    return (
        <div>
            <h3>Total Income: {totalIncome}</h3>
        </div>
    );
};

export default Income;