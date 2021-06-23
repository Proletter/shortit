import React from 'react';
import './App.css';
import Form from './MainForm';
import { Container} from 'reactstrap';
import {useState} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Redirect from './Redirect'


function App() {
  const [shrunkUrl, setShrunkUrl] = useState('')
  const [showLink, setShowLink] = useState(false)

  return (
    <BrowserRouter>
    <Switch>
          <Route exact path="/">
    <Container>
      <div className="App">
        <Form setShowLink={setShowLink} setShrunkUrl={setShrunkUrl} shrunkUrl={shrunkUrl}/>
        <p className="mt-4">your shrunk url is: 
          {
            showLink && <a target="_blank" rel="noreferrer" href={`/${shrunkUrl}`}> http://testurl.com/{shrunkUrl}</a>
          }
          
        </p>
    </div>
    
    </Container>
  </Route>

  <Route exact path="/:shortendpoint" component={Redirect}/>

  </Switch>
  </BrowserRouter>)
    
}

export default App;
