import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function Result({ result, openPopup }){
    return(

        <div className="result" onClick={() =>openPopup(result.imdbID)}>
            <Card>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={result.Title}
                    image={result.Poster}
                    title={result.Title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {result.Title}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
export default Result
