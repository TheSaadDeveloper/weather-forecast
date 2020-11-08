import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const Api_Key = '518d9bc7d9a140574124e211e1ab78ca';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q:query,
            units:'metric',
            AppId: Api_Key
        }
    });
    return data;
} 
