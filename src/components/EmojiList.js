import React from 'react';
import PropTypes from 'prop-types';
import Emoji from './Emoji';

class EmojiList extends React.Component {
    render() {
        return (
            <div>
                {this.props.emojis.map((emoji, i) => {
                    return (
                        <ul key = {i}>
                            <Emoji
                                key={emoji.title}
                                title={emoji.title}
                                symbol={emoji.symbol}
                            />
                        </ul>
                    );
                })}
            </div>
        );
    }
}

EmojiList.propTypes = {
    emojis: PropTypes.array.isRequired
};

export default EmojiList;