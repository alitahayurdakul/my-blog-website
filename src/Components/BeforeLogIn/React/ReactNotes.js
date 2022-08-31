import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import PartNoteStructure from '../PartNoteStructure/PartNoteStructure';
import axios from 'axios';
import { API } from '../../../API/Api';
import OtherNotesLink from '../OtherNotesLink/OtherNotesLink';
import { Helmet } from 'react-helmet';
import Image from '../../../Images/react.png';
import CommonHeader from '../CommonHeader/CommonHeader';

function ReactNotes() {
  const [reactNotes, setReactNotes] = useState("");

  useEffect(() => {

    const getReactNotes = async () => {
      await axios.get(API + "/notes/group-notes/react")
        .then(response => {
          setReactNotes(response.data)
        })
        .catch((err) => {

        })
    }

    getReactNotes();
  }, [setReactNotes])

  return (
    <>
      <Navbar />
      <div className='notes-part'>

        <Helmet>
          <title data-react-helmet="true">
            React Notları | ALİ TAHA YURDAKUL
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
                reactNotes.length !== 0 ? reactNotes.map(note => (
                  <React.Fragment key={note._id}>
                    <PartNoteStructure to={note.url} header={note.headerName} body={note.shortExplaining} />
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
export default ReactNotes;