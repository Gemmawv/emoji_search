import React from 'react';
// import PropTypes from 'prop-types';
import EmojiForm from './EmojiForm';
import EmojiList from './EmojiList';
import emojiData from '../emojiList.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: emojiData,
      // searchTerm: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div>
        <h1>Emoji Search</h1>
        <EmojiForm handleChange={this.handleChange} />
        <EmojiList emojis={this.state.filteredEmoji} />
      </div>
    );
  }
  handleChange(event) {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20),
    });

    // console.dir(event.target.value);
  }
}

function filterEmoji(searchText, maxResults) {
  return emojiData.filter((emoji) => {
    if (emoji.title.includes(searchText) || emoji.keywords.includes(searchText)) {
      return true;
    }
    return false;
  }).slice(0, maxResults);
}

export default App;
