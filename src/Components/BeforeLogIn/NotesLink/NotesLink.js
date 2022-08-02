import React from 'react'
import { Link } from 'react-router-dom'

function NotesLink({key, to, headerName}) {
    return (
        <li key={key} data-testid="notes-link">
            <Link to={to} data-testid="notes-link-part" title={headerName}>
                <span>{headerName}</span>
                <i className="fas fa-chevron-right fa-sm" />
            </Link>
        </li>
    )
}
export default NotesLink;