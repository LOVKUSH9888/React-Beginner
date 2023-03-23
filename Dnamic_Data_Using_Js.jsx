import React from "react";

function SubscriptionHandler(){

    let name = "Lovkush";
    let date = new Date(2023,03,23);  //In octat literal = use' '
    let title = "Monthly Subscription"
    let Amount = '125.5';

    return(
            <>
            <h1>Name = {name} </h1>
            {/*To convert the date itno a string*/}
            <h2>Data = {date.toISOString()}</h2>
            <h3>Title = {title}</h3>
            <h4>Amount = {Amount}</h4>
            </>
    )

}

export default SubscriptionHandler;