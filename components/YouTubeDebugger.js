import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateHandler(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  resolutionHandler(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video:{
          resolution: '720p'}
      })
    })
  }

  render() {
    return (
    <div>
      <button className='bitrate' onClick={() => this.bitrateHandler()}></button>
      <button className='resolution' onClick={() => this.resolutionHandler()}></button>
    </div>
    )
  }
}

export default YouTubeDebugger
