import React from 'react';
import PropTypes from 'prop-types';

class EmojiForm extends React.Component {
    render() {
        return (
            <div>
                <input type="text"
                    onChange={this.props.handleChange}
                />
            </div>
        );
    }
}

EmojiForm.propTypes = {
    handleChange: PropTypes.func.isRequired
}

export default EmojiForm;