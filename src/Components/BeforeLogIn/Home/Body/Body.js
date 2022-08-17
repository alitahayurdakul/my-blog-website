import React from 'react'
import NotesLink from '../../NotesLink/NotesLink';
import AboutMe from './AboutMe/AboutMe';

export default function Body() {
  return (
    <div className="home-body">
      <div className="home-body-part">
        <ul>
            <NotesLink to="react" headerName="React Notları" key={1} />
            <NotesLink to="nodejs" headerName="Node.Js Notları" key={2} />
            <NotesLink to="javascript" headerName="JavaScript Notları" key={3} />
            <NotesLink to="react-native" headerName="React Native Notları" key={4} />
            <NotesLink to="other" headerName="Diğer Notlar" key={5} />
        </ul>
      </div>

      <AboutMe />
    </div>
  )
}
