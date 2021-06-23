import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import axios from "axios"

const Redirect=()=>{
    const { shortendpoint } = useParams();
    // let redirectLink = process.env.REACT_APP_REDIRECT_URL

   
    useEffect(() => {
        async function getShortenedUrl() {
            try {
                const res = await axios.get('/api/redirecter', { params: { shrunkUrl: shortendpoint } });
                console.log(res.data[0].url)
                let redirectUrl = res.data[0].url
                window.location.href = redirectUrl;
            } catch (error) {

                console.log(error)
                
            }
          
        }
        getShortenedUrl()

      }, [shortendpoint]);
   
  return <p>Redirecting...</p>
           

}

export default Redirect