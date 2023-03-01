import * as flightsGateway from './gateway'

export const GET_FLIGHTS_LIST = 'AIRPORT/GET_FLIGHTS_LIST'

export const flightsListRecieved = flightsList => {
    const action = {
        type: GET_FLIGHTS_LIST,
        payload: {
            flightsList,
        },
    }
    return action
}

export const getFlightsList = date => {
    const thunkAction = function (dispatch) {
        flightsGateway
            .fetchFlightsListData(date)
            .then(flightsList => dispatch(flightsListRecieved(flightsList)))
    }

    return thunkAction
}
