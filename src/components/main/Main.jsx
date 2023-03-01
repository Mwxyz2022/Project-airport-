import React, { useState } from 'react'
import { Route, useLocation } from 'react-router-dom'

import FlightsNav from '../main/flightnav/FlightsNav'
import DateNavigation from './datenavigation/DateNavigation'
import FlightsTable from './flightstable/FlightsTable'

import './main.scss'

const Main = () => {
    const { pathname, search } = useLocation()
    const [searching, setSearching] = useState('')

    const onSearchTextToggle = event => {
        setSearching(event.target.value)
    }

    console.log(useLocation.search)

    const onSearchTextHandler = event => {
        event.preventDefault()
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

export default Main
