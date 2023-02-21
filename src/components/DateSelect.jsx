import React, { useState } from 'react'

import moment from 'moment'

import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css'
import '../styles/main/dateselect.scss'

moment.locale('en-gb')

const DateSelect = () => {
    const weekDay = {
        yesterday: moment().subtract(1, 'day'),
        today: moment(),
        tomorrow: moment().add(1, 'day'),
    }

    const showButtonDate = {
        yesterday: moment(weekDay.yesterday).format('DD/MM'),
        today: moment(weekDay.today).format('DD/MM'),
        tomorrow: moment(weekDay.tomorrow).format('DD/MM'),
    }

    const [currentDay, setCurrentDay] = useState('today')

    const [showCalendar, setShowCalendar] = useState(false)
    const onCalendarHandler = () => {
        setShowCalendar(true)
    }

    const [selectedDate, setSelectedDate] = useState(new Date())

    const onSelectDateHandler = date => {
        setSelectedDate(date)
        setShowCalendar(false)
        setCurrentDay('')
    }

    const onSelectDateButtHandler = day => {
        if (day === 'yesterday') {
            setSelectedDate(new Date(weekDay.yesterday))
            setCurrentDay(day)
        }
        if (day === 'today') {
            setSelectedDate(new Date(weekDay.today))
            setCurrentDay(day)
        }
        if (day === 'tomorrow') {
            setSelectedDate(new Date(weekDay.tomorrow))
            setCurrentDay(day)
        }
    }

    const yesterdayClass =
        moment(selectedDate).format('DD/MM/YY') === weekDay.yesterday.format('DD/MM/YY')
            ? 'day today'
            : 'day'

    const todayClass =
        moment(selectedDate).format('DD/MM/YY') === weekDay.today.format('DD/MM/YY')
            ? 'day today'
            : 'day'

    const tomorrowClass =
        moment(selectedDate).format('DD/MM/YY') === weekDay.tomorrow.format('DD/MM/YY')
            ? 'day today'
            : 'day'
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
                <button
                    className={yesterdayClass}
                    onClick={() => onSelectDateButtHandler('yesterday')}
                >
                    <div className="day__date">{showButtonDate.yesterday}</div>
                    <div className="day__title">yesterday</div>
                </button>
                <button className={todayClass} onClick={() => onSelectDateButtHandler('today')}>
                    <div className="day__date">{showButtonDate.today}</div>
                    <div className="day__title">today</div>
                </button>
                <button
                    className={tomorrowClass}
                    onClick={() => onSelectDateButtHandler('tomorrow')}
                >
                    <div className="day__date">{showButtonDate.tomorrow}</div>
                    <div className="day__title">tomorrow</div>
                </button>
                <div className={`date__line ${currentDay}`}></div>
            </div>
        </div>
    )
}

export default DateSelect
