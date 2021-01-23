import useSWR from 'swr';
import fetcher from '../utils/api';

const useBookSearch = (searchTerm: string, page: number, perPage: number) => {
    const { data, error } = useSWR(
        searchTerm ? `/api/books?title=${searchTerm}&page=${page}&page_limit=${perPage}` : null,
        fetcher
    );
    return { data, error, isLoading: searchTerm && !error && !data };
};

export default useBookSearch;
