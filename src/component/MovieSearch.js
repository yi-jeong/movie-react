import React, { useState } from "react";

function MovieSearch({ searchText, onChange }){

    return(
        <div className="moviesearch">
        <div className="container">

            <p><input type="text" name="moviesearch" value={searchText} onChange={onChange}/></p>

        </div>
        </div>
    );
}

export default MovieSearch;