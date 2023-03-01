import React, { useState } from 'react'
import { Route, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

import FlightsNav from '../main/flightnav/FlightsNav'
import DateNavigation from './datenavigation/DateNavigation'
import FlightsTable from './flightstable/FlightsTable'

import './main.scss'

import * as flightsActions from '../../redux/actions'

const Main = ({ flights, getFlightsList }) => {
    const { pathname } = useLocation()
    const [searching, setSearching] = useState('')

    const onSearchTextToggle = event => {
        setSearching(event.target.value)
    }

    console.log(flights)

    const onSearchTextHandler = event => {
        event.preventDefault()
        getFlightsList('31-12-2020')
    }

    return (
        <main className="main">
            <section className="main__search">
                <div className="container">
                    <h2 className="title">flight search</h2>
                    <div className="search">
                        <form className="form" onSubmit={onSearchTextHandler}>
                            <div className="form__input">
                                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Airline, destination or flight #"
                                    onChange={onSearchTextToggle}
                                    value={searching}
                                />
                            </div>

                            <button className="form__btn" type="submit">
                                search
                            </button>
                        </form>
                    </div>

                    <Route exact path="/">
                        <FlightsNav />
                    </Route>
                    {pathname !== '/' && <DateNavigation />}
                </div>
            </section>

            {pathname !== '/' && <FlightsTable />}
        </main>
    )
}

const mapDispatch = {
    getFlightsList: flightsActions.getFlightsList,
}

export default connect(null, mapDispatch)(Main)
