'use client'

import { useState } from 'react';
import { NoteCategory, NotePriority, Note } from '@/app/notes/types/notes';
import NoteItem from './components/NoteItem';

interface NoteFormState {
    title: string;
    content?: string;
    category: NoteCategory;
    priority: NotePriority;
}

const NotesList = () => {

    const [notes, setNotes] = useState<Note[]>([])
    const [formState, setFormState] = useState<NoteFormState>({
        title: '',
        content: '',
        category: NoteCategory.PERSONAL,
        priority: NotePriority.MEDIUM,
    })

    const resetForm = () => {
        setFormState({
            title: '',
            content: '',
            category: NoteCategory.PERSONAL,
            priority: NotePriority.MEDIUM,
        })
    }

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement |HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormState(prev => ({...prev, [name]: value}))
    }

    const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!formState.title.trim()) {
            alert('Заполните название!')
            return 
        }

        const newNote: Note = {
            id: `${(new Date()).getTime()}`,
            title: formState.title.trim(),
            content: formState.content?.trim(),
            category: formState.category,
            priority: formState.priority,
            createdAt: new Date(),
        }

        setNotes(prevNotes => [...prevNotes, newNote])
        resetForm()
    }

    const handleCategoryChange = (id: number|string, newCategory: NoteCategory) => {
        setNotes(prevNotes =>
        prevNotes.map(note =>  note.id === id ? { ...note, category: newCategory } : note)
        );
    };

    const handlePriorityChange = (id: number|string, newPriority: NotePriority) => {
        setNotes(prevNotes =>
        prevNotes.map(note =>
            note.id === id ? { ...note, priority: newPriority } : note
        )
        );
    };

    // Обработчик удаления задачи
    const handleDelete = (id: number|string) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id != id));
    };

    return (
        <div>
            <div>
                <h1>Список заметок</h1>
                <form onSubmit={handleAddNote}>
                    <input
                        name='title'
                        type="text"
                        value={formState.title}
                        onChange={handleFormChange}
                        placeholder='Название заметки'
                    />
                    <textarea
                        name='content'
                        value={formState.content}
                        onChange={handleFormChange}
                        placeholder='Напиши сюда заметку'
                    />
                    <select name="category" onChange={e => handleFormChange(e)} value={formState.category}>
                        {Object.values(NoteCategory).map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <select name="priority" onChange={e => handleFormChange(e)} value={formState.priority}>
                        {Object.values(NotePriority).map(priority => (
                            <option key={priority} value={priority}>{priority}</option>
                        ))}
                    </select>
                    <button type="submit">Добавить</button>
                </form>
            </div>
            <ul>
                {notes.map(note => (
                    <NoteItem
                        categorys={Object.values(NoteCategory)}
                        prioritys={Object.values(NotePriority)}
                        onCategoryChange={handleCategoryChange}
                        onPriorityChange={handlePriorityChange}
                        key={note.id}
                        note={note}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    )
}

export default NotesList;