import React, { useState } from 'react'

import moment from 'moment'

import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css'
import './dateselect.scss'

moment.locale('en-gb')
const momentSettings = {
    sameDay: '[today]',
    nextDay: '[tomorrow]',
    lastDay: '[yesterday]',
    lastWeek: '[ ]',
    nextWeek: '[ ]',
    sameElse: '[ ]',
}

const DateSelect = () => {
    const [showCalendar, setShowCalendar] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [currentDay, setCurrentDay] = useState('today')

    const weekDay = {
        yesterday: moment().subtract(1, 'day'),
        today: moment(),
        tomorrow: moment().add(1, 'day'),
    }

    const onCalendarHandler = () => {
        setShowCalendar(true)
    }

    const onSelectDateHandler = date => {
        setSelectedDate(date)
        setCurrentDay(moment(date).calendar(null, momentSettings))
        setShowCalendar(false)
    }

    const selectButtonHandler = event => {
        setSelectedDate(new Date(weekDay[event.currentTarget.name]))
        setCurrentDay(event.currentTarget.name)
    }

    const setClassDay = param =>
        moment(selectedDate).startOf('day').isSame(param.startOf('day')) ? 'day selected' : 'day'

    const { yesterdayDate, todayDate, tomorrowDate } = {
        yesterdayDate: moment(weekDay.yesterday).format('DD/MM'),
        todayDate: moment().format('DD/MM'),
        tomorrowDate: moment(weekDay.tomorrow).format('DD/MM'),
    }

    const { yesterday, today, tomorrow } = {
        yesterday: setClassDay(moment().subtract(1, 'day')),
        today: setClassDay(moment(new Date())),
        tomorrow: setClassDay(moment().add(1, 'day')),
    }

    return (
        <div className="calendar">
            <div className="datepicker">
                <label
                    htmlFor="datepick"
                    className="datepicker__container"
                    onClick={onCalendarHandler}
                >
                    <span className="datepicker__date">{moment(selectedDate).format('DD/MM')}</span>
                    <i className="fa-regular fa-calendar datepicker__icon"></i>
                </label>
                {showCalendar && (
                    <Calendar
                        id="datepick"
                        locale="en-gb"
                        className="datepicker__calendar"
                        onChange={onSelectDateHandler}
                        value={selectedDate}
                    />
                )}
            </div>
            <div className="date">
                <button className={yesterday} name="yesterday" onClick={selectButtonHandler}>
                    <div className="day__date">{yesterdayDate}</div>
                    <div className="day__title">yesterday</div>
                </button>
                <button className={today} name="today" onClick={selectButtonHandler}>
                    <div className="day__date">{todayDate}</div>
                    <div className="day__title">today</div>
                </button>
                <button className={tomorrow} name="tomorrow" onClick={selectButtonHandler}>
                    <div className="day__date">{tomorrowDate}</div>
                    <div className="day__title">tomorrow</div>
                </button>
                <div className={`date__line ${currentDay}`}></div>
            </div>
        </div>
    )
}

export default DateSelect
