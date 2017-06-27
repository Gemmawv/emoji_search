import React from 'react';
import PropTypes from 'prop-types';
import EmojiForm from './EmojiForm';
import EmojiList from './EmojiList';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Emoji Search</h1>
        <EmojiForm />
        <EmojiList />
      </div>
    )
  }
}


export default App;
