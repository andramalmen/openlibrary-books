import fetch from 'isomorphic-unfetch';
import { IBook } from './types';

const api = async (
    endpoint: string,
    customConfig = {}
): Promise<{ books: IBook[]; numPages: string }> => {
    const config = {
        method: 'GET',
        ...customConfig,
    };

    const response = await fetch(endpoint, config);
    return response.json();
};

export default api;
