import { useEffect, useState } from "react";


//custom hook to fetch data from a provided url inside a container called baseUrl in app.jsx.
export const useFetch = (url) => {
    const [data, setData] = useState(null);// State to store the fetched data ,initially null 



    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);
    //useEffect hook to perform side effects (data fetching i n this case)
    useEffect(() => {
        const getData = async () => { //Async function to fetch data 
    const response = await fetch(url);//Fetch data from the provided URL
    const jData = await response.json();// Parse response JSON data and keep inside jData.

    setData(jData.tasks ? jData.tasks : jData.task);// update the [data] state that was formally null with setData... updating data with fetched data 
    setLoading(false)
    console.log(jData);
        };
        setTimeout(async () => {
          try {
            await  getData();//Envoke getDta function
          } catch (error) {
            console.log(error);
            setError("oops something went wrong")
            setLoading(false)
          }
        }, 3000);
    }, []);

    return {data, setData, loading, error};//return an object containing data.
};