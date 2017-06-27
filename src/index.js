import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import data from './emojiList.json';


ReactDOM.render(<App emojis={data} />, document.getElementById('root'));
