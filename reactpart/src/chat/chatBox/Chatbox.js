import React from 'react';

import './ChatBox.css'

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: []}
  }

  render() {
    return (
      <div className="list-group">
        <a href="#" class="list-group-item list-group-item-action disabled">Biscuit Drawing
        </a>
        <a href="#" class="list-group-item list-group-item-action disabled">Biscuit Drawing
        </a>
      </div>
    )
  }
}

export default ChatBox;