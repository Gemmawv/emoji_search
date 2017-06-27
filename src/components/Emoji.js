import React from 'react';
import PropTypes from 'prop-types';

class Emoji extends React.Component {
    render() {
        return (
            <div>
                {this.props.title}
               {this.props.symbol}
            </div>
        )
    }
} 

export default Emoji;