// import { createSelector } from 'reselect'

export const flightListSelector = state => state.flights.flightsList

export const depFlightListSelector = state => state.flights.flightsList.departure
export const arrFlightListSelector = state => state.flights.flightsList.arrival
