import React , { Component } from "react";
import { Routes , Route , BrowserRouter } from "react-router-dom"

import Navbar from './Components/Navbar'
import Index from './Components/index'
import Contact from './Components/Contact'
import Resume from "./Components/Resume"
import InternetOfThings from "./Components/Projects/InternetOfThings";

class App extends Component {
  render(){
    return(
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<Index />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/internetofthings' element={<InternetOfThings />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App;