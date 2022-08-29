import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function NotesLink({ id, to, headerName }) {

    return (
            <li key={id}>
                <Link to={to} data-testid="notes-link-part" title={headerName}>
                    <span>{headerName}</span>
                    <i className="fas fa-chevron-right fa-sm" />
                </Link>
            </li>
    )
}

NotesLink.propsType = {
    id: PropTypes.number,
    to: PropTypes.string,
    headerName: PropTypes.string
};

export default NotesLink;