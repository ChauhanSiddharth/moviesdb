import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

function Popup({ selected, closePopup }){
    return (
        <section className="popup">
            <div className="content">
                <Typography variant="h4" gutterBottom>
                { selected.Title }<span>({ selected.Year })</span>
                </Typography>
                <Typography variant="body1" gutterBottom>
                Rating: {selected.imdbRating}
                </Typography>
                <div className="plot">
                    <img src={selected.Poster} />
                    <Typography variant="body1" gutterBottom>
                        {selected.Plot}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Director: {selected.Director}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Language: {selected.Language}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Genre: {selected.Genre}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Starring: {selected.Actors}
                    </Typography>
                </div>
                <Button variant="contained" color="secondary" onClick={closePopup}>
                    Close
                </Button>
            </div>
        </section>
    )
}

export default Popup