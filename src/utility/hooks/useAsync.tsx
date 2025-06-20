import { useCallback, useEffect, useRef, useState } from "react";
const maxRetry = 3;
//Retry time increase by 1sec everytime =>1,2,3,4

export function useAsync(callBack: ()=> Promise<any>) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const retryCountRef = useRef(maxRetry);
    let sec= 1000




    const fetchData = useCallback(()=>{
        sec = sec+1000;
        console.log("Fetch...", retryCountRef.current);
        callBack().then(res => {
            console.log("success...");
            setData(res);
        })
        .catch(err => {
            console.log("failed...", retryCountRef.current);
            if (err && retryCountRef.current > 0) {
                retryCountRef.current--;
                setTimeout(()=> fetchData(), sec);
            } else {
                setError(err);
            }
        }).finally(()=> {
            setIsLoading(false);
        })
    },[callBack]);

    useEffect(()=>{
        fetchData();
    },[fetchData])

    //f=>f(s)>f(s)>f(s)>else
    return [data, error, isLoading, fetchData];
}