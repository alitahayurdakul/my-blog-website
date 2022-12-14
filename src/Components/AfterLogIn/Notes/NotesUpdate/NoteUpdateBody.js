import React, { Component } from 'react';
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import '@progress/kendo-theme-default/dist/all.css';
import axios from 'axios';
import { API } from '../../../../API/Api';
import FormPageButton from '../../FormPageCommon/FormPageButton';

const {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Subscript,
    Superscript,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    Undo,
    Redo,
    FontSize,
    FontName,
    FormatBlock,
    Link,
    Unlink,
    InsertImage,
    ViewHtml,
    InsertTable,
    AddRowBefore,
    AddRowAfter,
    AddColumnBefore,
    AddColumnAfter,
    DeleteRow,
    DeleteColumn,
    DeleteTable,
    MergeCells,
    SplitCell,
} = EditorTools;

class NoteUpdateBody extends Component {

    state = {
        "headerName": "",
        "content": "",
        "shortExplaining": "",
        "parentHeader": "",
        "date": "",
        "responseMessage": "",
        "responseMessageClass": ""
    }

    componentDidMount = async () => {
        await axios.get(API + `/notes/detail/${this.props.noteId}`)
            .then(response => {
                this.setState({
                    headerName: response.data.headerName,
                    content: response.data.content,
                    date: response.data.date,
                    shortExplaining: response.data.shortExplaining,
                    parentHeader: response.data.parentHeader
                })
            })
            .catch(error => { })
    }

    onChangeInput = e => {
        this.setState({
            [e.target.name]: e.target.value,
            responseMessage: ""
        });
    };

    onChangeParentHeader = e => {
        this.setState({
            [e.target.name]: e.target.value,
            responseMessage: ""
        })
    }

    onChangeEditor = e => {


        this.setState({
            content: e.target.value
        })
    }

    onClickUpdate = async (e) => {
        e.preventDefault();
        const { headerName, shortExplaining, parentHeader, date, content } = this.state;
        await axios.put(API + `/notes/update/${this.props.noteId}`, {
            headerName,
            shortExplaining,
            parentHeader,
            date,
            content: content,
            url: headerName.toLowerCase().split(" ").join("-")
        })
            .then(response => this.setState({
                responseMessage: response.data.responseSuccessMessage,
                responseMessageClass: "alert alert-success"
            }))
            .catch((err) => {
                if (err.response) {
                    if (err.response.data.responseErrorMessage) {
                        this.setState({
                            responseMessage: err.response.data.responseErrorMessage,
                            responseMessageClass: "alert alert-danger"
                        })
                    }
                }
            });
    }

    render() {
        const { headerName, shortExplaining, parentHeader, date, responseMessage, responseMessageClass, content } = this.state;
        return (
            <div className="formPage">

                <form onSubmit={this.onClickUpdate}>
                    <div className="header-part">
                        <h1>Notu Güncelle</h1>
                    </div>
                    <p>
                        <br />
                        Aşağıda size ait bilgiler bulunmaktadır. Lütfen * ile belirtilmiş bilgileri eksiksiz bir şekilde doldurunuz ve "SORU EKLE" butonuna basınız.
                        Teşekkürler!</p>
                    <hr />

                    <fieldset>
                        <legend >NOTU GÜNCELLE</legend>

                        {
                            responseMessage ? <div className={responseMessageClass + " p-2"} role="alert">
                                {responseMessage}
                            </div> : null
                        }


                        <div className="item">
                            <label htmlFor="headerName">Konu Başlığı</label>
                            <input id="headerName" type="text" name="headerName" placeholder='Lütfen konu başlığını giriniz.' value={headerName} onChange={this.onChangeInput} required />
                        </div>

                        <div className="item">
                            <label htmlFor="content">İçerik</label>
                            <Editor
                                tools={[
                                    [Bold, Italic, Underline, Strikethrough],
                                    [Subscript, Superscript],
                                    [AlignLeft, AlignCenter, AlignRight, AlignJustify],
                                    [Indent, Outdent],
                                    [OrderedList, UnorderedList],
                                    FontSize,
                                    FontName,
                                    FormatBlock,
                                    [Undo, Redo],
                                    [Link, Unlink, InsertImage, ViewHtml],
                                    [InsertTable],
                                    [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
                                    [DeleteRow, DeleteColumn, DeleteTable],
                                    [MergeCells, SplitCell],
                                ]}
                                contentStyle={{
                                    height: 450,
                                }}
                                onChange={data => this.setState({
                                    content: data.html
                                })}

                                value={content}
                            />
                        </div>

                        <div className="item">
                            <label htmlFor="parentHeader">Üst Başlık <span>*</span></label>
                            <select className='py-2' id="parentHeader" name="parentHeader"
                                onChange={this.onChangeParentHeader} value={parentHeader} required>
                                <option value="">Seçiniz</option>
                                <option value="react">React Js</option>
                                <option value="nodejs">Node Js</option>
                                <option value="javascript">JavaScript</option>
                                <option value="react-native">React Native</option>
                                <option value="other">Diğer</option>
                            </select>
                        </div>

                        <div className="item">
                            <label htmlFor="date">Tarih</label>
                            <div className="name-item">
                                <input id="date" type="date" name="date"
                                    onChange={this.onChangeInput} value={date} required />
                            </div>
                        </div>

                        <div className="item">
                            <label htmlFor="shortExplaining">Kısa Açıklama</label>
                            <input id="shortExplaining" type="text" name="shortExplaining" placeholder='Lütfen konunun kısa özetini giriniz.'
                                value={shortExplaining} onChange={this.onChangeInput} maxLength="100" required />
                        </div>

                    </fieldset>
                    <FormPageButton buttonName="NOT GÜNCELLE" />
                </form>
            </div>
        )
    }
}
export default NoteUpdateBody;