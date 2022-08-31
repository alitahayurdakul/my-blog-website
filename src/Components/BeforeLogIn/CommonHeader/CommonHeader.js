import React, { Component } from 'react';

class CommonHeader extends Component {
    render() {
        return (
            <>
                {this.props.children}
            </>
        )
    }
}
export default CommonHeader;