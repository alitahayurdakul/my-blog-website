import axios from 'axios'
import React, { Component } from 'react'
import { API } from '../../../../API/Api'
import LastAddedPart from './LastAddedPart'

class LastAdded extends Component {

    state = {
        "notes": []
    }

    componentDidMount = async () => {
        await axios.get(API + "/notes/list")
            .then(response => {
                let lastAddedNotes = [];
                if (response.data.length < 9) {
                    this.setState({
                        notes: response.data
                    });
                }
                else {
                    for (let i = 0; i <= 8; i++) {
                        lastAddedNotes.push(response.data[i])
                    };

                    this.setState({
                        notes: lastAddedNotes
                    });
                }
            })
    }

    render() {
        return (
            <div className='last-added'>

                <h2>En Son Eklenenler</h2>

                <ul>
                    {
                        this.state.notes.map(note => (
                            <React.Fragment key={note._id}>
                                <LastAddedPart to={"/" + note.parentHeader + "/" + note.url} header={note.headerName} body={note.shortExplaining} />
                            </React.Fragment>
                        ))
                    }

                </ul>
            </div>
        )
    }
}
export default LastAdded;