import React from 'react'
import { connect } from 'react-redux'

import './flighttable.scss'

import * as flightListSelector from '../../../redux/selectors'

const FlightsTable = ({ depList, arrList }) => {
    console.log(depList) //
    console.log(arrList) //
    //

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
                {depList &&
                    depList.map(flight => {
                        console.log(flight)

                        return (
                            <tr className="flytable__line__flight" key={flight.ID}>
                                <th className="flytable__item terminal">
                                    <span className="flight-terminal">{flight.term}</span>
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
                        )
                    })}
            </tbody>
        </table>
    )
}

const mapDispatch = {}

const mapState = state => ({
    depList: flightListSelector.depFlightListSelector(state),
    arrList: flightListSelector.arrFlightListSelector(state),
})

export default connect(mapState, mapDispatch)(FlightsTable)
