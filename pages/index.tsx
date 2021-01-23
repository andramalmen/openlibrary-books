import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '../components/common/Error';
import Spinner from '../components/common/Spinner';
import DisplayResults from '../components/DisplayResults';
import Search from '../components/Search';
import useBookSearch from '../hooks/useBookSearch';
import useLocalStorage from '../hooks/useLocalStorage';

const Home: React.FunctionComponent = ({ crtPage }: any) => {
    const router = useRouter();

    const [search, setSearch] = React.useState('');
    const [layout, setLayout] = useLocalStorage('layout', 'grid');
    const [perPage, setPerPage] = useLocalStorage('perPage', 50);
    const [page, setPage] = React.useState(() => crtPage);
    const { data, error, isLoading } = useBookSearch(search, page, perPage);
    React.useEffect(() => {
        if (!search) {
            router.push('/', undefined, { shallow: true });
            setSearch('');
        }
    }, []);

    const onSearch = searchTerm => {
        setSearch(searchTerm);
        router.push('/', undefined, { shallow: true });
        setPage(1);
    };

    const changeLayout = (e, style: string) => {
        e.preventDefault;
        setLayout(style);
    };

    const changeResultsDisplayed = (e, resultsPerPage) => {
        e.preventDefault;
        setPerPage(resultsPerPage);
    };

    const changePage = (e, newPage) => {
        e.preventDefault;
        router.push('/?page=' + newPage, undefined, { shallow: true });
        setPage(newPage);
    };

    const createPagination = () => {
        const pagination = [];
        for (let i = 1; i <= data.numPages; i++) {
            let cls = 'bg-white text-pink-500';
            if (i === page) {
                cls = 'text-white bg-pink-500';
            }
            const element = (
                <li key={i} onClick={e => changePage(e, i)} className="cursor-pointer">
                    <span
                        className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 items-center justify-center leading-tight relative border border-solid border-pink-500 ${cls}`}
                    >
                        {i}
                    </span>
                </li>
            );
            pagination.push(element);
        }

        return pagination;
    };

    return (
        <ErrorBoundary FallbackComponent={Error}>
            <div className="container mx-auto px-5 sm:px-20 py-20">
                <h1 className="text-5xl text-center pb-10">Find books</h1>
                <Search onSearch={onSearch} />

                {error ? <Error /> : null}
                {isLoading ? <Spinner /> : null}
                {data ? (
                    <>
                        <div className="flex items-center justify-between flex-wrap bg-white p-6">
                            <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
                                <div className="text-sm md:flex-grow">
                                    <button
                                        className="appearance-none bg-white p-3 shadow mr-5"
                                        onClick={e => changeLayout(e, 'grid')}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                fill={
                                                    layout === 'grid'
                                                        ? 'rgba(190, 24, 93, 1)'
                                                        : null
                                                }
                                                d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        className="appearance-none bg-white p-3 shadow"
                                        onClick={e => changeLayout(e, 'list')}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path
                                                fill={
                                                    layout !== 'grid'
                                                        ? 'rgba(190, 24, 93, 1)'
                                                        : null
                                                }
                                                d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="text-xs pt-5 md:pt-0">
                                    Per page:
                                    <button
                                        type="submit"
                                        className="appearance-none bg-pink-700 text-white text-base font-semibold p-3 shadow hover:bg-pink-400 mx-5"
                                        onClick={e => changeResultsDisplayed(e, 50)}
                                    >
                                        50
                                    </button>
                                    <button
                                        type="submit"
                                        className="appearance-none bg-pink-700 text-white text-base font-semibold p-3 shadow hover:bg-pink-400 mr-5"
                                        onClick={e => changeResultsDisplayed(e, 20)}
                                    >
                                        20
                                    </button>
                                    <button
                                        type="submit"
                                        className="appearance-none bg-pink-700 text-white text-base font-semibold p-3 shadow hover:bg-pink-400"
                                        onClick={e => changeResultsDisplayed(e, 10)}
                                    >
                                        10
                                    </button>
                                </div>
                            </div>
                        </div>
                        <DisplayResults books={data.books} layout={layout} />
                        {data.numPages > 1 && search ? (
                            <nav className="block">
                                <ul className="flex pl-0 rounded list-none flex-wrap justify-end">
                                    {createPagination()}
                                </ul>
                            </nav>
                        ) : null}
                    </>
                ) : null}
            </div>
        </ErrorBoundary>
    );
};

export const getServerSideProps: GetServerSideProps = async context => {
    const crtPage = context.query?.page || 1;
    return {
        props: { crtPage },
    };
};

export default Home;
