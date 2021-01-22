import fetch from 'isomorphic-unfetch';

export const api = async (
    endpoint: string,
    customConfig = {}
): Promise<Record<string, unknown>> => {
    const config = {
        method: 'GET',
        ...customConfig,
    };

    const response = await fetch(endpoint, config);
    return response.json();
};
