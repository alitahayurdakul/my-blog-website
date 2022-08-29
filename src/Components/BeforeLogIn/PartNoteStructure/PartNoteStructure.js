import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PartNoteStructure({ to, header, body}) {
    return (
        <li>
            <Link to={to} data-testid="note-structure-link" title={header}>
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

PartNoteStructure.propsType = {
    to: PropTypes.string
}

export default PartNoteStructure;