import React from 'react';
import PropTypes from 'prop-types';
import EmojiForm from './EmojiForm';
import EmojiList from './EmojiList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: this.props.searchTerm
    }
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    // calculate fileteredEmojis

    // pass filteredEmojis to EmojiList
    return (
      <div>
        <h1>Emoji Search</h1>
        <EmojiForm handleChange={this.handleChange}/>
        <EmojiList emojis={this.props.emojis} />
      </div>
    )
  }
  handleChange(event) {
    // update state.searchTerm with the new value
        console.dir(event.target.value);
  }
}

// use SetState. Look this up on the documentation


export default App;
