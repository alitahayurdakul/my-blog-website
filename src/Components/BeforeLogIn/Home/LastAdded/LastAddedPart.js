import React from 'react'
import { Link } from 'react-router-dom';

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
export default LastAddedPart;