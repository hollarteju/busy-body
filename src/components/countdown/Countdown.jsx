import React, { useState, useEffect } from 'react';

const Countdown = ({ numberOfDays }) => {
    const [nod, setNod] = useState(numberOfDays * 24 * 60 * 60)
    const [countdown, setCountdown] = useState({
        days: numberOfDays,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            const totalSeconds = nod;
            setNod((prevnod) => prevnod - 1)
            const remainingSeconds = totalSeconds - 1;

            if (remainingSeconds <= 0) {
                clearInterval(countdownInterval);
                setCountdown({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            } else {
                const days = String(Math.floor(remainingSeconds / (24 * 60 * 60))).padStart(2, '0');
                const hours = String(Math.floor((remainingSeconds % (24 * 60 * 60)) / (60 * 60))).padStart(2, '0');
                const minutes = String(Math.floor((remainingSeconds % (60 * 60)) / 60)).padStart(2, '0');
                const seconds = String(Math.floor(remainingSeconds % 60)).padStart(2, '0');

                setCountdown({
                    days,
                    hours,
                    minutes,
                    seconds,
                });
            }
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, [nod, countdown]);

    const Colon = () => {
        return(
            <div className="flex flex-col gap-2 mt-6">
                <span className="p-[2.5px] rounded-full bg-brandRed"></span>
                <span className="p-[2.5px] rounded-full bg-brandRed"></span>
            </div>
        )
    }
    const Countbox = ({countvalue, title}) => {
        return(
            <div className="md:px-8 px-4 py-4 flex flex-col justify-center items-center rounded-xl md:rounded-md shadow-xl font-medium text-sm border border-transparent bg-black text-primary w-20 md:w-48 ">
                <h1 className="text-lg">{title}</h1>
                <span className="font-bold text-lg md:text-4xl">{countvalue}</span>
            </div>
        )
    }
    return (
        <div className="flex justify-center items-center gap-2 max-sm:flex-wrap w-full">
            <Countbox  countvalue={countdown.days} title={"Days"}/>
            <Countbox  countvalue={countdown.hours} title={"Hours"}/>
            <Countbox  countvalue={countdown.minutes} title={"Minutes"}/>
            <Countbox  countvalue={countdown.seconds} title={"Seconds"}/>
        </div>
    );
};

export default Countdown;
