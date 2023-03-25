import { useSelector } from "react-redux";
import Note from "./components/Note";

import { useDispatch } from "react-redux";
import { folderActions } from "../store/store";
import { modalActions } from "../store/store";
import { notesActions } from "../store/store";

import { useState, useEffect } from "react";
import "../style.scss";

export default function NotesDisplayContainer() {
  const notes = useSelector((state: any) => state.notes.notesList);
  const folders = useSelector((state: any) => state.folders.foldersList);
  const selectedFolder = folders.find((folder: any) => folder.isSelected);

  const populateNotesHandler = (folderNotes) => {
    dispatch(notesActions.populateNotes(folderNotes));
  };

  const updateChangesHandler = (folder) => {
    dispatch(folderActions.updateFolder(folder));
  };

  useEffect(() => {}, [selectedFolder, notes]);

  const isOpenModal = useSelector((state: any) => state.modal.isModalOpen);
  const modalProps = useSelector((state: any) => state.modal.modalProps);
  const modalType = useSelector((state: any) => state.modal.modalType);

  useEffect(() => {
    if (modalProps) {
      setTitle(modalProps.title);
      setContent(modalProps.content);
    }
  }, [modalProps]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(modalActions.openModal());
  };

  const closeModalHandler = () => {
    dispatch(modalActions.closeModal());
  };

  const addNoteHandler = (note: any) => {
    if (modalType === "edit") {
      dispatch(notesActions.updateNote(note));
    }
    if (modalType === "add") {
      dispatch(notesActions.addNote(note));
    }
    dispatch(modalActions.closeModal());
  };

  return (
    <main className="main">
      {/* Modal */}
      {isOpenModal && (
        <article className="note-modal">
          <input
            type="text"
            placeholder="Note title"
            aria-label="note-title"
            className="note-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="note"
            placeholder="Note content"
            aria-label="note-content"
            className="note-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <footer>
            <button
              onClick={() =>
                addNoteHandler({
                  id: modalProps ? modalProps.id : "",
                  title: title,
                  content: content,
                })
              }
            >
              {modalType}
            </button>
            <button onClick={closeModalHandler}>Cancel</button>
          </footer>
        </article>
      )}

      <header>
        <h2>All Notes</h2>
        <div onClick={openModalHandler} role="button">
          New Note
        </div>
      </header>

      <section className="note-container">
        {notes.map((note: any) => (
          <Note key={note.id} note={note} />
        ))}
      </section>
    </main>
  );
}
