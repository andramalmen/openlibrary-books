import useSWR from 'swr';
import fetcher from '../utils/api';

const useBookSearch = (searchTerm: string, page: string, perPage: number) => {
    const { data, error } = useSWR(searchTerm ? `/api/books?title=${searchTerm}` : null, fetcher);
    if (!data) {
        return { error, isLoading: searchTerm && !error && !data };
    }

    const start = Number(page);
    const limit = Number(perPage);
    const books = data.books.slice((start - 1) * limit, start * limit);
    const pages = Math.ceil(data.books.length / limit);
    return { data: { books, numPages: pages }, error, isLoading: searchTerm && !error && !data };
};

export default useBookSearch;
