import React, { useEffect, useRef, useState } from 'react';

const Countdown = () => { 
    
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {

        interval = setInterval(() => {

            const now = new Date();
            const remainTime = (new Date('April 06 2022 10:32:53 GMT-0500') - now + 1000) / 1000;
            const remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
            const remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
            const remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
            const remainDays = Math.floor(remainTime / (3600 * 24));

            if (remainTime <= 1) {
                clearInterval(interval.current);
            } 
            else {
                setTimerDays(remainDays);
                setTimerHours(remainHours);
                setTimerMinutes(remainMinutes);
                setTimerSeconds(remainSeconds);
            }

        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return() => {
            clearInterval(interval.current);
        };
    });
    

    return(
        <React.Fragment>
        <h1 className="countdown__title">Beta en camino</h1>    
        <div className="countdown">
            <div className="countdown__item countdown__days">
                <div className="item__num">
                    <span className="num__days" id="clock">{timerDays}</span>
                </div>
                <span className="item__txt mins__num">Days</span>
            </div>
            <div className="countdown__item countdown__hours">
                <div className="item__num">
                    <span className="num__hours">{timerHours}</span>
                </div>
                <span className="item__txt hours__txt">Hours</span>
            </div>
            <div className="countdown__item countdown__mins">
                <div className="item__num">
                    <span className="num__mins">{timerMinutes}</span>
                </div>
                <span className="item__txt mins__txt">Mins</span>
            </div>
            <div className="countdown__item countdown__secs">
                <div className="item__num">
                    <span className="num__secs">{timerSeconds}</span>
                </div>
                <span className="item__txt mins__txt">Secs</span>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Countdown;