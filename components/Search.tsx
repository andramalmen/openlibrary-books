import * as React from 'react';

type SearchProps = {
    onSearch: (searchTerm: string) => void;
};

const Search = ({ onSearch }: SearchProps) => {
    const [searchTerm, setSearchTerm] = React.useState<string>('');

    const changeSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchTerm(e.currentTarget.value);
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="max-w-sm mx-auto p-1 pr-0 flex items-center">
                <input
                    type="search"
                    placeholder="Search for a book by title"
                    className="flex-1 appearance-none shadow p-3  mr-2 focus:outline-none"
                    onChange={changeSearchInput}
                    value={searchTerm}
                />
                <button
                    type="submit"
                    className="appearance-none bg-pink-700 text-white text-base font-semibold p-3 shadow hover:bg-pink-400"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default Search;
