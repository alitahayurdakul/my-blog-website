import React, { Component } from 'react';

class NodeJsHeader extends Component {
    render() {
        return (
            <>
                {this.props.children}
            </>
        )
    }
}
export default NodeJsHeader;