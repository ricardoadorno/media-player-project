import React from "react";
import "../style.scss";

function AsideMenu({
  currentPage,
  setCurrentPage,
  notePages,
  setNotePages,
  setNotes,
}) {
  const [isEditFolder, setIsEditFolder] = React.useState(false);
  const folderInput = React.useRef(null);

  function handleEdit(e) {
    e.preventDefault();
    const newNotePages = notePages.map((notePage) => {
      if (notePage.notePageId === currentPage) {
        return {
          ...notePage,
          noteTitle: folderInput.current.value,
        };
      }
      return notePage;
    });

    setNotePages(newNotePages);
    setIsEditFolder(false);
  }

  return (
    <aside className="aside">
      <article>
        <h3>Notes List</h3>
        <h5>
          Folder
          <i
            className="new-folder"
            onClick={() => {
              setNotePages((prevNotePages) => [
                ...prevNotePages,
                {
                  notePageId: prevNotePages.length,
                  noteTitle: "New Folder",
                },
              ]);
            }}
          >
            +
          </i>
        </h5>
        {isEditFolder && (
          <form onSubmit={handleEdit}>
            {" "}
            <input type="text" ref={folderInput} placeholder="New name" />{" "}
            <button type="submit">Save</button>
            <button onClick={() => setIsEditFolder(false)}>Cancel</button>{" "}
          </form>
        )}
        {notePages.map((note) => {
          return (
            <p
              key={note.notePageId}
              onClick={(e) => {
                switch (e.detail) {
                  case 1: {
                    setCurrentPage(note.notePageId);
                    setNotes(notePages[notePages.notePageId].notesFile);
                    break;
                  }
                  case 2: {
                    setIsEditFolder(true);
                    break;
                  }
                  default: {
                    break;
                  }
                }
              }}
              className={`folder-item ${
                notePages.notePageId === note.notePageId && "active"
              }`}
            >
              {note.noteTitle}
            </p>
          );
        })}
      </article>
    </aside>
  );
}

export default AsideMenu;
