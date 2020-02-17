import React from 'react';

function timeOfDay() {

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        fontSize: 30
    };

    if (hours < 12) {
        timeOfDay = "Morning";
        styles.color = "#04756F";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon";
        styles.color = "#8914A3";
    }
    else {
        timeOfDay = "Night";
        styles.color = "#D90000";
    }

    return (
        <h1 className="helloMessage" style={styles}>Good {timeOfDay}!</h1>

    )
}

export default timeOfDay;