import { base_url, api_key  } from '../constants/apir_url';

const get_url_by_city = city => {
    return `${base_url}?q=${city}&appid=${api_key}`;
}

export default get_url_by_city;