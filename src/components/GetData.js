import axios from "axios";
import { useEffect } from "react";

function GetData(url, variable, setVariable){
    useEffect( ()=>{
        axios.get(url).then( resData => 
        {
            setVariable(resData.data);
        });
    }, [variable] );
}

export default GetData;