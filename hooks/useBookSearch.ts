import useSWR from 'swr';
import fetcher from '../utils/api';

const useBookSearch = (searchTerm: string) => {
    const { data, error } = useSWR(searchTerm ? '/api/books?title=' + searchTerm : null, fetcher);
    return { data, error, isLoading: searchTerm && !error && !data };
};

export default useBookSearch;
