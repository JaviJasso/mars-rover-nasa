import React, { Component } from "react"
import GetImageButton from "../GetImageButton"
import ImageDisplay from "../ImageDisplay"
import {NASA_KEY} from '../../secrets'

class GetImageForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      roverImages: [],
    }
  }

  getImages = (event) => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${NASA_KEY}`
    fetch(url)
    .then(res => res.json())
    .then(roverImages => this.setState({roverImages}))
  }

  render() {
    return (
      <div>
        <ImageDisplay images={this.state.roverImages} />
        <GetImageButton getImages={this.getImages}/>
      </div>
    )
  }
}

export default GetImageForm
