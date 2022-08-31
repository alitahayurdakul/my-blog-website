import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../../../API/Api';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import OtherNotesLink from '../OtherNotesLink/OtherNotesLink';
import PartNoteStructure from '../PartNoteStructure/PartNoteStructure';
import Helmet from 'react-helmet';
import CommonHeader from '../CommonHeader/CommonHeader';
import Image from '../../../Images/others.jpeg';

function Others() {
  const [otherNotes, setOtherNotes] = useState([]);

  useEffect(() => {

    const getOtherNotes = async () => {
      await axios.get(API + "/notes/group-notes/other")
        .then(response => setOtherNotes(response.data));
    }

    getOtherNotes();

  }, [setOtherNotes]);

  return (
    <>
      <Navbar />
      <div className='notes-part'>
        <Helmet>
          <title data-react-helmet="true">
            Diğer Notlar | ALİ TAHA YURDAKUL
          </title>
        </Helmet>

        <CommonHeader >
          <div className='notes-part-header' style={{ backgroundImage: `url(${Image})` }}>

          </div>
        </CommonHeader>

        <div className='notes-part-body'>
          <div className='notes-part-left'>
            <ul>
              {
                otherNotes.length !== 0 ? otherNotes.map(note => (
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
export default Others;