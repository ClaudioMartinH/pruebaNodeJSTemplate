interface NoteBook{
    size: string;
    type: string;
}
class ClassNoteBook implements NoteBook{
    size: string;
    type: string;
    constructor(size: string, type: string){
        this.size = size;
        this.type = type
    }
}
class StripedSheet extends ClassNoteBook {
    size: string;
    type: string;
    constructor(size: string, type: string){
        super(size, type)
        this.size = size;
        this.type = type;
    }
    asignatura(classNoteBook: ClassNoteBook): string {
        return "Lengua y Literatura";
    }
}
    class SquaredSheet extends ClassNoteBook {
    size: string;
    type: string;
    constructor(size: string, type: string){
        super(size, type)
        this.size = size;
        this.type = type;
    }
        asignatura(classNoteBook: ClassNoteBook): string {
            return "Matematicas"
   
    }
}
export {ClassNoteBook, NoteBook, SquaredSheet, StripedSheet}