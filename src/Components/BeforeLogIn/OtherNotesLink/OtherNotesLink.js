import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../../../API/Api';
import NotesLink from '../NotesLink/NotesLink'


function OtherNotesLink() {
    const [otherNotes, setOtherNotes] = useState([]);

    useEffect(() => {

        const getOtherNotes = async () => {
            await axios.get(API + "/notes/list")
                .then(response => {
                    let lastAddedNotes = [];

                    if (response.data.length > 10) {

                        for (let i = 0; i <= 9; i++) {
                            lastAddedNotes.push(response.data[i]);
                        };

                        setOtherNotes(lastAddedNotes);
                    }

                    else {
                        setOtherNotes(response.data);
                    }

                })
        }

        getOtherNotes();
    }, []);

    return (
        <div className='notes-part-right' data-testid="other-notes-link">
            <h4 className='text-center'>Şu Notlara da Gözat</h4>
            <ul>
                {otherNotes.map(note => (
                    <React.Fragment key={note._id}>
                        <NotesLink to={"/" + note.parentHeader + "/" + note.url} headerName={note.headerName} />
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )
}

export default OtherNotesLink;