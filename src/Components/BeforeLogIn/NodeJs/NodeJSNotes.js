import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../../../API/Api';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import OtherNotesLink from '../OtherNotesLink/OtherNotesLink';
import PartNoteStructure from '../PartNoteStructure/PartNoteStructure';
import Helmet from 'react-helmet';
import Image from '../../../Images/nodejs.png';
import CommonHeader from '../CommonHeader/CommonHeader';
function NodeJSNotes() {

    const [nodeJSNotes, setNodeJSNotes] = useState([]);

    useEffect(() => {
        const getNodeJsNotes = async () => {
            await axios.get(API + "/notes/group-notes/nodejs")
                .then(response => setNodeJSNotes(response.data))
                .catch(() => {

                })
        }
        getNodeJsNotes()
    }, [setNodeJSNotes]);
    
    return (
        <>
            <Navbar />
            <div className='notes-part'>

                <Helmet>
                    <title data-react-helmet="true">
                        Node.js Notları | ALİ TAHA YURDAKUL
                    </title>
                </Helmet>

                <CommonHeader >
                <div className='notes-part-header' style={{backgroundImage:`url(${Image})`}}>
                    </div>
                </CommonHeader>

                <div className='notes-part-body'>
                    <div className='notes-part-left'>
                        <ul>
                            {
                                nodeJSNotes.length !== 0 ? nodeJSNotes.map(note => (
                                    <React.Fragment key={note._id}>
                                        <PartNoteStructure to={note.url} header={note.headerName} body={note.shortExplaining} id={note._id} />
                                    </React.Fragment>
                                )) : <div>Herhangi bir not bulunmamaktadır.</div>
                            }

                        </ul>
                    </div>

                    <OtherNotesLink />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NodeJSNotes;