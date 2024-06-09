const GetLondonForecast = async () => {
    const apiKey = 'cc92817f34ff42d2a85131215241305';
    const days = 7;
    const location = 'London'; 
    const currentDate = new Date();
    const endDate = currentDate.toISOString().split('T')[0];
    const startDate = new Date(currentDate.setDate(currentDate.getDate() - days)).toISOString().split('T')[0]; // 3 days ago

    const apiUrl = `https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${location}&dt=${startDate}&end_dt=${endDate}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.error('Error fetching data from REST Countries: ', error);
    }
}

export default GetLondonForecast;