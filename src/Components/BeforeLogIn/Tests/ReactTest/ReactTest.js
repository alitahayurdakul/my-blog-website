import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import Navbar from '../../Navbar/Navbar';

class ReactTest extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Helmet>
                    <title>React Test | ALİ TAHA YURDAKUL</title>
                </Helmet>
                <div className='notes-part'>

                    <div className='notes-part-body'>
                        <div className='notes-part-left'>
                            {
                                question ? <>
                                    <p>{`What is the turkish meaning of "${question.word}"?`}</p>
                                    <div className='english-test-body'>

                                        <input type="radio" id="A" name="option" value="A" onClick={onClickRadio} />
                                        <label htmlFor="A">
                                            A-) {question.optionA}
                                        </label>
                                        <br />

                                        <input type="radio" id="B" name="option" value="B" onClick={onClickRadio} data-testid="false-answer" />
                                        <label htmlFor="B">
                                            B-) {question.optionB}
                                        </label>
                                        <br />

                                        <input type="radio" id="C" name="option" value="C" onClick={onClickRadio} data-testid="true-answer" />
                                        <label htmlFor="C">
                                            C-) {question.optionC}
                                        </label>
                                        <br />

                                        {
                                            status ? <button className='btn btn-primary' onClick={onClickNext}>İleri</button> :
                                                <button className='btn btn-primary' onClick={onClickAnswer.bind(this, question.correctAnswer)}>Cevapla</button>
                                        }

                                    </div>
                                </> : <div>Soru bulunamadı.</div>
                            }

                        </div>
                        <OtherNotesLink />
                    </div>
                </div>
            </>
        )
    }
}
export default ReactTest;