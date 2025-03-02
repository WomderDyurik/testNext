'use client'

import { useState } from 'react';
import { NoteCategory, NotePriority, Note } from '@/app/notes/types/notes';


const NotesList = () => {

    const [notes, setNotes] = useState<Note[]>([])
    const [newNoteTitle,setNewNoteTitle] = useState<string>('')
    const [newNoteContent,setNewNoteContent] = useState<string>('')
    const [newNoteCategory,setNewNoteCategory] = useState<NoteCategory>(NoteCategory.PERSONAL)
    const [newNotePriority,setNewNotePriority] = useState<NotePriority>(NotePriority.MEDIUM)

    const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!newNoteTitle.trim()) {
            alert('Заполните название!')
            return 
        }

        const newNote: Note = {
            id: `${new Date()}`,
            title: newNoteTitle.trim(),
            content: newNoteContent.trim(),
            category: newNoteCategory,
            priority: newNotePriority,
            createdAt: new Date(),
        }

        setNotes(prevNotes => [...prevNotes, newNote])
        setNewNoteTitle('')
        setNewNoteContent('')
        setNewNoteCategory(NoteCategory.PERSONAL)
        setNewNotePriority(NotePriority.MEDIUM)
    }

    // Обработчик удаления задачи
    const handleDelete = (id: number) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    };

    return (
        <div>
            <div>
                <h1>Список заметок</h1>
                <form onSubmit={handleAddNote}>
                    <input
                        name='noteTitle'
                        type="text"
                        value={newNoteTitle}
                        onChange={e => setNewNoteTitle(e.target.value)}
                        placeholder='Название заметки'
                    />
                    <textarea
                        name='noteContent'
                        value={newNoteContent}
                        onChange={e => setNewNoteContent(e.target.value)}
                        placeholder='Напиши сюда заметку'
                    />
                    <select name="noteCategory">
                        {Object.values(NoteCategory).map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <select name="notePriority">
                        {Object.values(NotePriority).map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <button type="submit">Добавить</button>
                </form>
            </div>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>{note.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default NotesList;