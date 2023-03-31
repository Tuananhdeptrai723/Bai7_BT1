
class Note {
    public title: string;
    public content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    public addNote(): void {
        const newNote = new Note(this.title, this.content);
        noteList.addNoteToList(newNote);
    }
}

class NoteList {
    public notes: Note[];

    constructor() {
        this.notes = [];
    }

    public addNoteToList(note: Note): void {
        this.notes.push(note);
    }
}

const noteList = new NoteList();

const note1 = new Note('Title 1', 'Content 1');
note1.addNote();

const note2 = new Note('Title 2', 'Content 2');
note2.addNote();

console.log(noteList.notes);