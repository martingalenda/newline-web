import React, { Component } from 'react';

/* Función: Devuelve un objeto con el tiempo faltante */
const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

console.log(getRemainTime('Sep 06 2023 10:32:53 GMT-0500'));

class Countdown extends Component{ 

    

    render() {
        return(
            <React.Fragment>
            <h1 className="countdown__title">Beta en camino</h1>    
            <div className="countdown">
                <div className="countdown__item countdown__days">
                    <div className="item__num">
                        <span className="num__days" id="clock">X</span>
                    </div>
                    <span className="item__txt mins__num">Days</span>
                </div>
                <div className="countdown__item countdown__hours">
                    <div className="item__num">
                        <span className="num__hours">11</span>
                    </div>
                    <span className="item__txt hours__txt">Hours</span>
                </div>
                <div className="countdown__item countdown__mins">
                    <div className="item__num">
                        <span className="num__mins">22</span>
                    </div>
                    <span className="item__txt mins__txt">Mins</span>
                </div>
                <div className="countdown__item countdown__secs">
                    <div className="item__num">
                        <span className="num__secs">11</span>
                    </div>
                    <span className="item__txt mins__txt">Secs</span>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Countdown;

/* const countdown = (deadline, elem, finalMessage) => {
    let el = document.getElementById(elem);

    const timerUpdate = setInterval( () => {
            let t = getRemainTime(deadline);
            el.innerHTML = `${t.remainSeconds}`;         
            if (t.remainTime <= 1) {
                    clearInterval(timerUpdate);
                    el.innerHTML = finalMessage;
            }
    }, 1000)
};

countdown('Sep 06 2023 10:32:53 GMT-0500', 'clock', 'Feliz cumple'); */