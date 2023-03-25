import AsideMenu from "./component/AsideMenu";
import MainNotes from "./component/MainNotes";
import React from "react";

function App() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [notePages, setNotePages] = React.useState([
    {
      notePageId: 0,
      noteTitle: "Note 1",
      notesFile: [
        {
          noteId: 0,
          noteTitle: "Note Title",
          noteContent:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis laboriosam modi expedita ipsum tenetur quos optio provident odio laborum ipsam?",
          isFavorite: false,
        },
        {
          noteId: 1,
          noteTitle: "Note Title",
          noteContent:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
          isFavorite: true,
        },
      ],
    },
    {
      notePageId: 1,
      noteTitle: "Note 2",
      notesFile: [
        {
          noteId: 0,
          noteTitle: "Note Title",
          noteContent:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis laboriosam modi expedita ipsum tenetur quos optio provident odio laborum ipsam?",
          isFavorite: false,
        },
      ],
    },
    {
      notePageId: 2,
      noteTitle: "Note 3",
      notesFile: [],
    },
  ]);

  const [notes, setNotes] = React.useState(notePages[0].notesFile);

  return (
    <div className="container">
      <div className="parent">
        <AsideMenu
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          notePages={notePages}
          setNotePages={setNotePages}
          setNotes={setNotes}
        />
        <MainNotes notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default App;
