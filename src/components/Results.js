import React from 'react'
import Result from './Result'
import CircularProgress from '@material-ui/core/CircularProgress';

function Results ({ results, openPopup }){
    if(!results){
        return <CircularProgress />;
    }
    return (
        <section className="results">
            {results.map(result => (
                <Result key={result.imdbID} 
                result={result} 
                openPopup={openPopup} />
            ))}
        </section>
    )
}

export default Results 