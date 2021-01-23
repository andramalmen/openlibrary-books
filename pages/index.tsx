import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '../components/common/Error';
import Spinner from '../components/common/Spinner';
import Search from '../components/Search';
import useBookSearch from '../hooks/useBookSearch';

const Home: React.FunctionComponent = () => {
    const [search, setSearch] = React.useState('');
    const { data, error, isLoading } = useBookSearch(search);

    const onSearch = searchTerm => {
        setSearch(searchTerm);
    };

    return (
        <ErrorBoundary FallbackComponent={Error}>
            <div className="py-20">
                <h1 className="text-5xl text-center pb-10">Find books</h1>
                <Search onSearch={onSearch} />
                {error ? <Error /> : null}
                {isLoading ? <Spinner /> : null}
            </div>
        </ErrorBoundary>
    );
};

export default Home;
