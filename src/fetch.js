import axios from 'axios';


const axiosInstance = (options, url = 'graphql') => {
    const apiDomain = 'http://bookcase.loc/graphiql';

    const defaults = {
        baseURL: apiDomain,
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    return axios({
        url,
        ...defaults,
        ...options,
    });
};


export default axiosInstance;