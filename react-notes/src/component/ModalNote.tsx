import "../style.scss";
import React from "react";

export default function ModalNote({
  setModalOpen,
  newNoteContent,
  newNoteTitle,
  notes,
  setNotes,
  isEdit,
  setIsEdit,
}) {
  return (
    <article className="note-modal">
      <input
        type="text"
        placeholder="Note title"
        aria-label="note-title"
        className="note-title"
        ref={newNoteTitle}
      />
      <textarea
        name="note"
        placeholder="Note content"
        aria-label="note-content"
        className="note-content"
        ref={newNoteContent}
      ></textarea>
      <footer>
        <button
          onClick={() => {
            !isEdit.isEdit
              ? setNotes(
                  (prevNotes) => [
                    ...prevNotes,
                    {
                      noteId: prevNotes.length,
                      noteTitle: newNoteTitle.current.value,
                      noteContent: newNoteContent.current.value,
                      isFavorite: false,
                    },
                  ],
                  setModalOpen(false)
                )
              : setNotes(
                  notes.map((note) => {
                    if (note.noteId === isEdit.elementId) {
                      return {
                        ...note,
                        noteTitle: newNoteTitle.current.value,
                        noteContent: newNoteContent.current.value,
                      };
                    }
                    return note;
                  }),
                  setModalOpen(false),
                  setIsEdit({
                    isEdit: false,
                    elementId: undefined,
                  })
                );
          }}
          role="button"
        >
          Confirm
        </button>
        <button
          onClick={() =>
            isEdit.isEdit
              ? setIsEdit({
                  isEdit: false,
                  elementId: undefined,
                }) && setModalOpen(false)
              : setModalOpen(false)
          }
        >
          Cancel
        </button>
      </footer>
    </article>
  );
}
