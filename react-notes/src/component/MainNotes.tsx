import "../style.scss";
import React from "react";
import ModalNote from "./ModalNote";

export default function MainNotes({ notes, setNotes }) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState({
    isEdit: false,
    elementId: undefined,
  });

  const newNoteTitle = React.useRef<HTMLInputElement>(null);
  const newNoteContent = React.useRef<HTMLTextAreaElement>(null);

  function handleDelete(noteId: number) {
    const newNotes = notes.filter((note) => note.noteId !== noteId);
    setNotes(newNotes);
  }

  async function handleEdit(noteId: number) {
    // select note to edit
    const noteToEdit = notes.find((note) => note.noteId === noteId);
    // set modal open
    await setModalOpen(true);
    await setIsEdit({
      isEdit: true,
      elementId: noteId,
    });

    // set note title and content to modal
    newNoteTitle.current.value = noteToEdit.noteTitle;
    newNoteContent.current.value = noteToEdit.noteContent;
  }

  function handleFavorite(noteId: number) {
    const newNotes = notes.map((note) => {
      if (note.noteId === noteId) {
        return {
          ...note,
          isFavorite: !note.isFavorite,
        };
      }
      return note;
    });
    setNotes(newNotes);
  }

  return (
    <main className="main">
      {modalOpen && (
        <ModalNote
          setModalOpen={setModalOpen}
          newNoteTitle={newNoteTitle}
          newNoteContent={newNoteContent}
          notes={notes}
          setNotes={setNotes}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      )}

      <div className="mobile-button">+</div>

      <header>
        <h2>All Notes</h2>
        <div onClick={() => setModalOpen(true)} role="button">
          New Note
        </div>
      </header>
      <section className="note-container">
        {notes.map((note) => {
          return (
            <div className="note" key={note.noteId}>
              <hgroup>
                <h3>{note.noteTitle}</h3>
                <p>{note.noteContent}</p>
              </hgroup>
              <div className="edit-note">
                <div onClick={() => handleDelete(note.noteId)}>Delete</div>
                <div onClick={() => handleEdit(note.noteId)}>Edit</div>
                <div
                  onClick={() => handleFavorite(note.noteId)}
                  className={note.isFavorite ? "favorite" : ""}
                >
                  Favorite
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
