const apiUrl = 'https://api.iev.aero/api/flights'

export const fetchAirportData = () =>
    fetch(`${apiUrl}/${today}`).then(response => {
        if (response.ok) {
            return response.json()
        }
    })
