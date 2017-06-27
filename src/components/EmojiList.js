import React from 'react';
import PropTypes from 'prop-types';
import Emoji from './Emoji';

class EmojiList extends React.Component {
    render() {
            console.log(this.props.emojis)
        return (
            <div>
                {this.props.emojis.map(function (emoji){
                    return <Emoji title={emoji.title} symbol={emoji.symbol}/>
                })}
            </div>
        )
    }
}

export default EmojiList;