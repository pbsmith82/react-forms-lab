import React from "react";

class TwitterMessage extends React.Component {

  state = {
      maxChars: this.props.maxChars,
      message: ""
    }
  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} type="text" name="message" id="message" value={this.state.message}/>
        {this.state.maxChars - this.state.message.length} Characters Remaining!
      </div>
    );
  }
}

export default TwitterMessage;
