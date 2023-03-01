import React from 'react'

import './flighttable.scss'

const FlightsTable = () => {
    console.log(1)

    return (
        <table className="flytable">
            <thead>
                <tr className="flytable__line__header">
                    <th className="header__item terminal">Terminal</th>
                    <th className="header__item loctime">Local time</th>
                    <th className="header__item destination">Destination</th>
                    <th className="header__item status ">Status</th>
                    <th className="header__item airline">Airline</th>
                    <th className="header__item flightnum">Flight</th>
                    <th className="header__item details"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="flytable__line__flight">
                    <th className="flytable__item terminal">
                        <span className="flight-terminal">A</span>
                    </th>
                    <th className="flytable__item loctime">0:25</th>
                    <th className="flytable__item destination">Cologne</th>
                    <th className="flytable__item status">Landed 0:26</th>
                    <th className="flytable__item airline">Wizz Air</th>
                    <th className="flytable__item flightnum">W67308</th>
                    <th className="flytable__item details">
                        <a href="#" className="flight-details">
                            Flight details
                        </a>
                    </th>
                </tr>
                <tr className="flytable__line__flight">
                    <th className="flytable__item terminal">
                        <span className="flight-terminal">A</span>
                    </th>
                    <th className="flytable__item loctime">0:25</th>
                    <th className="flytable__item destination">Cologne</th>
                    <th className="flytable__item status">Landed 0:26</th>
                    <th className="flytable__item airline">Wizz Air</th>
                    <th className="flytable__item flightnum">W67308</th>
                    <th className="flytable__item details">
                        <a href="#" className="flight-details">
                            Flight details
                        </a>
                    </th>
                </tr>
                <tr className="flytable__line__flight">
                    <th className="flytable__item terminal">
                        <span className="flight-terminal">A</span>
                    </th>
                    <th className="flytable__item loctime">0:25</th>
                    <th className="flytable__item destination">Cologne</th>
                    <th className="flytable__item status">Landed 0:26</th>
                    <th className="flytable__item airline">Wizz Air</th>
                    <th className="flytable__item flightnum">W67308</th>
                    <th className="flytable__item details">
                        <a href="#" className="flight-details">
                            Flight details
                        </a>
                    </th>
                </tr>
            </tbody>
        </table>
    )
}

export default FlightsTable
