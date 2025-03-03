import { NoteCategory, NotePriority, Note } from "@/app/notes/types/notes";

interface NoteItemProps {
    note: Note;
    categorys: NoteCategory[];
    prioritys: NotePriority[];
    onCategoryChange: (id: number|string, category: NoteCategory) => void;
    onPriorityChange: (id: number|string, priority: NotePriority) => void;
    onDelete: (id: number|string) => void;
}

const NoteItem = ({note, categorys, prioritys, onCategoryChange, onPriorityChange, onDelete} : NoteItemProps) => {

    const handleCategoriesChange = (category: NoteCategory) => {
        const selectedCategory = categorys.find((c) => c === category);
        if (selectedCategory) {
            onCategoryChange(note.id, selectedCategory);
        }
    }

    const handlePriorityChange = (priority: NotePriority) => {
        const selectedPriority = prioritys.find((p) => p === priority);
        if (selectedPriority) {
            onPriorityChange(note.id, selectedPriority);
        }
    }

    const handleDelete = () => {
        onDelete(note.id);
    }

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <label>Category:</label>
            <p>{note.category}</p>
            <select value={note.category} onChange={e => handleCategoriesChange(e.target.value as NoteCategory)}>
                {categorys.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <label>Priority:</label>
            <p>{note.priority}</p>
            <select value={note.priority} onChange={e => handlePriorityChange(e.target.value as NotePriority)}>
                {prioritys.map((priority) => (
                    <option key={priority} value={priority}>
                        {priority}
                    </option>
                ))}
            </select>
            <button onClick={handleDelete}>Delete</button>
            <hr />
        </div>
    );
}

export default NoteItem;