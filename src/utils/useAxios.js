import { useState , useEffect } from 'react';
import axios from 'axios';

function useAxios(apipath) {
    const [ apiResponse , setApiResponse ] = useState({});
    const [ loading , setLoading ] = useState(true);
    useEffect(() => {
        (async () => {
            try{
                const res = await axios.get(apipath);
                setApiResponse(res.data);
                setLoading(false);
            }catch(err){
                console.log(err+" this error is encountered")
            }
        })()
    },[])

    return {apiResponse,loading};
}
export default useAxios;
