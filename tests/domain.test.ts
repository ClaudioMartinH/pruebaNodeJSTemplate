import {
  ClassNoteBook,
  NoteBook,
  SquaredSheet,
  StripedSheet,
} from "../src/domainLogic";


describe("First test", () => {
  test("Should return the topic of the striped notebook", () => {
    const llibretaMates: StripedSheet = new StripedSheet("A4", "clase1");
    expect(llibretaMates.asignatura(llibretaMates).match("Matematicas"));
  });
  test("Should return the topic of the squared notebook", () => {
    const llibretaLlengua: SquaredSheet = new SquaredSheet("A4", "clase1");
    expect(llibretaLlengua.asignatura(llibretaLlengua).match("Literatura y Lengua"));
  });
});
