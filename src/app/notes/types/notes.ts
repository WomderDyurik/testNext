export enum NoteCategory {
    PERSONAL = 'personal',
    WORK = 'work',
    STUDY = 'study',
    IDEAS = 'ideas'
}

export enum NotePriority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high'
}

export interface Note {
    id: number | string;
    title: string;
    content?: string;
    category: NoteCategory;
    priority: NotePriority;
    createdAt: Date;
    updatedAt?: Date;
}