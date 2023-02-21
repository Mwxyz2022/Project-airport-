import React from 'react'
import { Route, useLocation } from 'react-router-dom'

import FlightsNav from './FlightsNav'
import DateNavigation from './DateNavigation'

import '../styles/main/main.scss'

const Main = () => {
    const { pathname } = useLocation()

    return (
        <main className="main">
            <section className="main__search">
                <div className="container">
                    <h2 className="title">flight search</h2>
                    <div className="search">
                        <form className="form">
                            <div className="form__input">
                                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Airline, destination or flight #"
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

                    {/* <Route path="/departures"></Route>
                    <Route path="/arrivals"></Route> */}
                </div>
            </section>
        </main>
    )
}

export default Main

// {nav?  :  }
