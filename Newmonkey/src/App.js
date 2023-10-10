import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({ progress:progress })
  }
  render() {
    return (
      <BrowserRouter>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News progress={this.setProgress} pageSize={3} country="in" category="general" key="general" />} />
          <Route exact path='/business' element={<News progress={this.setProgress} pageSize={3} country="in" category="business" key="business" />} />
          <Route exact path='/entertainment' element={<News progress={this.setProgress} pageSize={3} country="in" category="entertainment" key="entertainment" />} />
          <Route exact path='/general' element={<News progress={this.setProgress} pageSize={3} country="in" category="general" key="general" />} />
          <Route exact path='/health' element={<News progress={this.setProgress} pageSize={3} country="in" category="health" key="health" />} />
          <Route exact path='/sports' element={<News progress={this.setProgress} pageSize={3} country="in" category="sports" key="sports" />} />
          <Route exact path='/science' element={<News progress={this.setProgress} pageSize={3} country="in" category="science" key="science" />} />
          <Route exact path='/technology' element={<News progress={this.setProgress} pageSize={3} country="in" category="technology" key="science" />} />
        </Routes>
      </BrowserRouter>

    )
  }
}
