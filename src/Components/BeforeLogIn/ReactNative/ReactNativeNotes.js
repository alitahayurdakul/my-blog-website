import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../../../API/Api';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import OtherNotesLink from '../OtherNotesLink/OtherNotesLink';
import PartNoteStructure from '../PartNoteStructure/PartNoteStructure';
import { Helmet } from 'react-helmet';
import CommonHeader from '../CommonHeader/CommonHeader';
import Image from '../../../Images/react-native.png';

function ReactNativeNotes() {
    const [ReactNativeNotes, setReactNativeNotes] = useState([]);

    useEffect(() => {

        const getReactNativeNotes = async () => {
            await axios.get(API + "/notes/group-notes/react-native")
                .then(response => setReactNativeNotes(response.data));
        }

        getReactNativeNotes();

    }, [setReactNativeNotes]);
    return (
        <>
            <Navbar />
            <div className='notes-part'>

                <Helmet>
                    <title data-react-helmet="true">
                        React Native Notları | ALİ TAHA YURDAKUL
                    </title>
                </Helmet>

                <CommonHeader>
                    <div className='notes-part-header' style={{ backgroundImage: `url(${Image})` }}>
                    </div>
                </CommonHeader>

                <div className='notes-part-body'>
                    <div className='notes-part-left'>
                        <ul>
                            {
                                ReactNativeNotes.length !== 0 ? ReactNativeNotes.map(note => (
                                    <PartNoteStructure to={note.url} header={note.headerName} body={note.shortExplaining} id={note._id} />
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
export default ReactNativeNotes;