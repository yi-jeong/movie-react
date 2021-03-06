import React, { useEffect, useState,useParm } from "react";
import axios from "axios";
import MovieSearch from "./MovieSearch";
import MovieListBox from "./MovieListBox";

function MovieList(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [test, setTest] = useState([]);
    const [searchText, setSearchText] = useState('starwars');

    //const { moviesearch } = searchText;
    const onChange = e => {
        const { value } = e.target;
        setSearchText(value);
    }
    

    useEffect(async ()=>{
        const {data: { boxOfficeResult: {dailyBoxOfficeList} } } = await axios.get(
            "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=1069d8fc4c81fcbc4a54732e8632324b&targetDt=20220214&itemPerPage=10"
        );
        console.log(dailyBoxOfficeList);
        setTest(dailyBoxOfficeList);      
    },[])

    const ID_KEY = 'pPFlRmVxyZ1MEGIz3_id';
    const SECRET_KEY = 'QwcuiZWOEi';

    useEffect(()=>{
        const fetchEvent = async ()=> {
            try{
                const response = await axios.get("/naver/v1/search/movie.json",{
                    params:{ 
                        query: searchText, 
                        display: 10 
                    },
                    headers:{
                        'X-Naver-Client-Id': ID_KEY,
                        'X-Naver-Client-Secret': SECRET_KEY
                    }
                });
                setMovies(response.data.items);
                console.log(movies);
            } catch(e) {
                console.log(e);
            }
        };
        fetchEvent();
    },[searchText])

    return(
        <>
        <MovieSearch searchText={searchText} onChange={onChange}/>
        <MovieListBox searchText={searchText} movies={movies}/>
        </>
    );
}


export default MovieList;