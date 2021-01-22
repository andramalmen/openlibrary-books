import fetch from 'isomorphic-unfetch';

export const api = async (endpoint, customConfig = {}) => {
    const config = {
        method: 'GET',
        ...customConfig,
    };

    await fetch(endpoint, config);
    return response.json();
};
