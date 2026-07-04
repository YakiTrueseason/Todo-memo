import React, { useContext, useEffect, useState } from 'react'
import './Memo.css';
import { ScheduleContext } from '../../conponents/ScheduleContext';
// import API_BASE_URL from '../../api/api';

import{
        addNote,
        updateNote,
        deleteNote
    }from "../../api/noteApi";

function Memo() {
    //読み込み　起動

    const{
        notes,
        loadNotes,
        selectedDate
    }=useContext(ScheduleContext);

    const [selectedNote, setSelectedNote] = useState(null);
    const [editedText, setEditedText] = useState("");

    // 初回読み込み
    useEffect(()=>{
    loadNotes();
    },[loadNotes])

    const handleNoteAdd = async() => {
        // 新しいオブジェクトの追加
        const newNote = {
            date:selectedDate,
            // 下の画像はメモと入力してから変換
            text: "新規ノート📝"
        };
        await addNote(newNote);
        await loadNotes();
    };
    
    const handleSelect = (note) => {
        setSelectedNote(note);
        setEditedText(note.text);
    }
    const handleDelete = async(noteId) => {
        await deleteNote(noteId);
        await loadNotes();
    }
    
    const handleChange = (e) => {
        setEditedText(e.target.value);
    }

    const handleSave = async() => {
        await updateNote({
            ...selectedNote,
            text:editedText
        });
        await loadNotes();
    }
    return (
        <div className="app-container">
            {/* sidebar */}
            <div className='sidebar'>
                <h1>メモ</h1>
                <h3>選択中の日付： <br /> {selectedDate}</h3>
                <ul>
                    {notes
                    .filter(
                        (note)=>note.date === selectedDate
                    )
                    .map((note) => (
                        <li key={note.id} className={selectedNote?.id === note.id ? "selected" : ""}>
                            <button onClick={() => handleDelete(note.id)} className='delete'>削除</button>
                            <span onClick={() => handleSelect(note)}>{note.text}</span>
                        </li>
                    ))}
                </ul>
                    <button id='create' onClick={handleNoteAdd}>ノート追加</button>
            </div>
            {/* main */}
            <div className='main'>
                {selectedNote ? (
                    <>
                        <h2>内容</h2>
                        <textarea value={editedText} onChange={handleChange} />
                        <button onClick={handleSave} className='save'>保存</button>
                    </>
                ) : (
                    <div>
                        ノートを作成してください。
                    </div>
                )}
            </div>
        </div>
    );
}

export default Memo
