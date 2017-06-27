import React from 'react';
import PropTypes from 'prop-types';
import Emoji from './Emoji';

class EmojiList extends React.Component {
    render() {
        return (
            <div>
                EmojiList <Emoji />
            </div>
        )
    }
}

export default EmojiList;