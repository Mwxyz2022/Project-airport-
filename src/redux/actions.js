export const GET_FLIGHTS_LIST = 'AIRPORT/GET_FLIGHTS_LIST'

export const getFlightsListData = flightsList => {
    const action = {
        type: GET_FLIGHTS_LIST,
        payload: {
            flightsList,
        },
    }
    return action
}
