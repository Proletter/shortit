import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios"
import {useState} from 'react'


const MainForm = ({setShrunkUrl, shrunkUrl, setShowLink}) => {
  const [input, setInput] = useState('')
  // const API_URL = process.env.REACT_APP_SHORTNER_URL
  const body = {
    url: input
  }

  async function callEndpoint(e){
    setInput('')
    try {
     
      const res = await axios.post('/api/shortner',JSON.stringify(body));  
      setShrunkUrl(res.data.shrunkUrl)
      setShowLink(true)
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Long Url</Label>
        <Input value={input} onChange={(e)=> setInput(e.target.value)}type="text" name="email" id="exampleEmail" placeholder="Input your long url and click shrink! to shrink" />
      </FormGroup>
  
      <Button onClick={callEndpoint}>Shrink!</Button>
    </Form>
  );
}

export default MainForm;