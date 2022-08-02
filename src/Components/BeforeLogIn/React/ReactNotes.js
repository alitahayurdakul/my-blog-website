import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import PartNoteStructure from '../PartNoteStructure/PartNoteStructure';
import axios from 'axios';
import { API } from '../../../API/Api';
import OtherNotesLink from '../OtherNotesLink/OtherNotesLink';

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

        <Header />

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