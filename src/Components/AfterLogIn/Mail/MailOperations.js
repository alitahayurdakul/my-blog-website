import React, { Component } from 'react'
import FormPageButton from '../FormPageCommon/FormPageButton';
import Navbar from '../Navbar/Navbar';
import { API } from '../../../API/Api';
import axios from 'axios';

class MailOperations extends Component {

    state = {
        "mailId": null,
        "hostName": "",
        "eMail": "",
        "eMailPassword": "",
        "portNumber": "",
        "fromEmail": "",
        "responseMessage": "",
        "responseMessageClass": ""
    };

    componentDidMount = async () => {
        await axios.get(API + "/mail/list")
            .then(response => {
                const { _id, hostName, eMail, eMailPassword, fromEmail, portNumber } = response.data[0];

                this.setState({
                    mailId: _id,
                    hostName,
                    eMail,
                    eMailPassword,
                    portNumber,
                    fromEmail
                });
            });
    }

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            responseMessage:""
        })
    };

    onClickUpdate = async (e) => {
        e.preventDefault();
        const { hostName, eMail, eMailPassword, portNumber, fromEmail, mailId } = this.state;
        await axios.put(API + "/mail/update/" + mailId, {
            hostName,
            eMail,
            eMailPassword,
            fromEmail,
            portNumber,
        })
            .then(response => {
                this.setState({
                    responseMessage: response.data.responseSuccessMessage,
                    responseMessageClass: "alert alert-success"
                })
            })
            .catch((err) => {
                if (err.response) {
                    if (err.response.data.responseErrorMessage) {
                        this.setState({
                            responseMessage: err.response.data.responseErrorMessage,
                            responseMessageClass: "alert alert-danger"
                        })
                    }
                }
            })

    };

    render() {
        const { hostName, eMail, eMailPassword, portNumber, fromEmail, responseMessage, responseMessageClass } = this.state;
        return (
            <>
                <Navbar />
                <div className="formPage">

                    <form onSubmit={this.onClickUpdate}>
                        <div className="header-part">
                            <h1>Mail İşlemleri</h1>
                        </div>
                        <p>
                            <br />
                            Aşağıda size ait mail bilgileri bulunmaktadır. Lütfen değişiklik yapmak isterseniz, * ile belirtilmiş bilgileri eksiksiz bir şekilde doldurunuz ve "Maili Güncelle" butonuna basınız.
                            Teşekkürler!</p>
                        <hr />

                        <fieldset>
                            <legend >Mail İşlemleri</legend>

                            {
                                responseMessage ? <div className={responseMessageClass + " p-2 mt-2"} role="alert">
                                    {responseMessage}
                                </div> : null
                            }

                            <div className="item">
                                <label htmlFor="hostName">Hostname</label>
                                <input id="hostName" type="text" name="hostName" value={hostName}
                                    onChange={this.onChangeInput} required />
                            </div>

                            <div className="item">
                                <label htmlFor="eMail">E-posta Adresi</label>
                                <input id="eMail" type="email" name="eMail" value={eMail}
                                    onChange={this.onChangeInput} required />
                            </div>

                            <div className="item">
                                <label htmlFor="eMailPassword">E-posta Şifresi</label>
                                <input id="eMailPassword" type="password" name="eMailPassword" value={eMailPassword}
                                    onChange={this.onChangeInput} required />
                            </div>

                            <div className="item">
                                <label htmlFor="portNumber">Port</label>
                                <input id="portNumber" type="text" name="portNumber" value={portNumber}
                                    onChange={this.onChangeInput} required />
                            </div>

                            <div className="item">
                                <label htmlFor="fromEmail">From E-posta Adresi</label>
                                <input id="fromEmail" type="email" name="fromEmail" value={fromEmail}
                                    onChange={this.onChangeInput} required />
                            </div>

                        </fieldset>
                        <FormPageButton buttonName="MAİLİ GÜNCELLE" />
                    </form>
                </div>
            </>
        )
    }
}
export default MailOperations;