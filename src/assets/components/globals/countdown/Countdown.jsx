import React, { useEffect, useRef, useState, useContext } from 'react';
import LangContext from '../../../context/LangContext';

const Countdown = ({date}) => { 
    
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    const { texts } = useContext(LangContext);

    let interval = useRef()

    const startTimer = () => {

        interval = setInterval( () => {

            const now = new Date();
            const remainTime = (new Date(date) - now + 1000) / 1000;
            const remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
            const remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
            const remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
            const remainDays = Math.floor(remainTime / (3600 * 24));

            if (remainTime <= 1) {
                clearInterval(interval);
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
            clearInterval(interval);
        };
    });
    

    return(
        <>
        <h1 className="countdown__title">{texts.countdown.title}</h1>    
        <div className="countdown">
            <div className="countdown__item countdown__days">
                <div className="item__num">
                    <span className="num__days" id="clock">{timerDays}</span>
                </div>
                <span className="item__txt mins__num">{texts.countdown.days}</span>
            </div>
            <div className="countdown__item countdown__hours">
                <div className="item__num">
                    <span className="num__hours">{timerHours}</span>
                </div>
                <span className="item__txt hours__txt">{texts.countdown.hours}</span>
            </div>
            <div className="countdown__item countdown__mins">
                <div className="item__num">
                    <span className="num__mins">{timerMinutes}</span>
                </div>
                <span className="item__txt mins__txt">{texts.countdown.mins}</span>
            </div>
            <div className="countdown__item countdown__secs">
                <div className="item__num">
                    <span className="num__secs">{timerSeconds}</span>
                </div>
                <span className="item__txt mins__txt">{texts.countdown.secs}</span>
            </div>
        </div>
        </>
    );
}

export default Countdown;