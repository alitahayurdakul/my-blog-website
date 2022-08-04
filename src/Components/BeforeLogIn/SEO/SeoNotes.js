import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from '../../../API/Api';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import OtherNotesLink from '../OtherNotesLink/OtherNotesLink';
import PartNoteStructure from '../PartNoteStructure/PartNoteStructure';
import SeoHeader from './Header/SeoHeader';
import Helmet from 'react-helmet';

function Seo() {
  const [seoNotes, setSeoNotes] = useState([]);

  useEffect(() => {

    const getSeoNotes = async () => {
      await axios.get(API + "/notes/group-notes/seo")
        .then(response => setSeoNotes(response.data));
    }

    getSeoNotes();

  }, [setSeoNotes]);

  return (
    <>
      <Navbar />
      <div className='notes-part'>
      <Helmet>
          <title data-react-helmet="true">
            SEO Notları | ALİ TAHA YURDAKUL
          </title>
        </Helmet>

        <SeoHeader />

        <div className='notes-part-body'>
          <div className='notes-part-left'>
            <ul>
              {
                seoNotes.length !== 0 ? seoNotes.map(note => (
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
export default Seo;