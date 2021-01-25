type ResultsPerPagebuttonProps = {
    changeResultsDisplayed: (results: string) => void;
    numResults: string;
};

const ResultsPerPagebutton = ({
    changeResultsDisplayed,
    numResults,
}: ResultsPerPagebuttonProps) => {
    const changeNumResults = (e: React.MouseEvent<HTMLElement>, resultsPerPage: string) => {
        e.preventDefault;
        changeResultsDisplayed(resultsPerPage);
    };
    return (
        <button
            type="submit"
            className="appearance-none bg-pink-700 text-white text-base font-semibold p-3 shadow hover:bg-pink-400 mx-2"
            onClick={e => changeNumResults(e, numResults)}
        >
            {numResults}
        </button>
    );
};

export default ResultsPerPagebutton;
