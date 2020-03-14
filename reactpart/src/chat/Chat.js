import React from 'react';

import ChatBox from './chatBox/Chatbox'

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({message: e.target.value})
  }

  handleSubmit(e) {
    this.setState({message: ''})
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <div className="row">
          <ChatBox />
        </div>
        <div className="row mt-1">
          <form onSubmit={this.handleSubmit} className="form-inline" id="chatIn">
            <div className="form-group">
              <input type="text" className="form-control" id="chatInput" value={this.state.message} onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Chat;