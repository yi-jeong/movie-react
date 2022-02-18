import React from "react";
import noneimg from '../assets/img/noneimg.png';

function MovieListBox({searchText,movies}){
    return(
        <div className="movielist">
        <div className="container">
            { searchText == "" ?
            <div>
                test    
            </div>
            : 
            <div className="row">
            { movies.map( n => {
                return(
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 movielist-box" key={n.link}>
                        <figure>
                            <img src={ n.image == "" ? noneimg : n.image } alt={n.title} />
                            <figcaption>
                                <h6>{n.title}</h6>
                                <p>{n.userRating}</p>
                            </figcaption>
                        </figure>
                    </div>
                );  
            })}
            </div>
            }
        </div>
        </div>
    );
}

export default MovieListBox;