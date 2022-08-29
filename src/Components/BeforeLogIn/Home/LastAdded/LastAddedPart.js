import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LastAddedPart({ to, header, body }) {

    return (
        <li>
            <Link to={to}>
                <span>
                    {header}
                </span>
                <p>
                    {body}
                </p>
            </Link>
        </li>
    )
}

LastAddedPart.propsType = {
    to : PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string
};

export default LastAddedPart;