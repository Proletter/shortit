import React from 'react';
import { useParams } from "react-router-dom";
import axios from "axios"
import { useEffect } from 'react';

const Redirect=()=>{
    const { shortendpoint } = useParams();
    let redirectLink = process.env.REACT_APP_REDIRECT_URL

   
    useEffect(() => {
        async function getShortenedUrl() {
            try {
                const axios = require('axios');
                const res = await axios.get(redirectLink, { params: { shrunkUrl: shortendpoint } });
                console.log(res.data[0].url)
                let redirectUrl = res.data[0].url
                window.location.href = redirectUrl;
            } catch (error) {

                console.log(error)
                
            }
          
        }
        getShortenedUrl()

      }, []);
   
  return <p>Redirecting...</p>
           

}

export default Redirect