import React from 'react';
import PropTypes from 'prop-types';
import EmojiForm from './EmojiForm';
import EmojiList from './EmojiList';

class App extends React.Component {
  // constructor(props) {
  //   super(props) {
  //   }
  // }
  render() {

    return (
      <div>
        <h1>Emoji Search</h1>
        <EmojiForm />
        <EmojiList emojis={this.props.emojis} />
      </div>
    )
  }
}


export default App;
