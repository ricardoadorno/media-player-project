import "../../style.scss";
import { useDispatch } from "react-redux";
import { notesActions } from "../../store/store";
import { modalActions } from "../../store/store";

export type NoteProps = {
  note: {
    id: string;
    title: string;
    content: string;
    isFavorite: boolean;
  };
};

export default function Note({ note }: NoteProps) {
  const dispatch = useDispatch();

  const deleteNoteHandler = (noteID: string) => {
    dispatch(notesActions.deleteNote(noteID));
  };

  const toggleFavoriteHandler = (noteID: string) => {
    dispatch(notesActions.toggleFavorite(noteID));
  };

  const isEditModalHandler = (note: any) => {
    dispatch(modalActions.isEditModal(note));
  };

  return (
    <div className="note" key={note.id}>
      <hgroup>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
      </hgroup>
      <div className="edit-note">
        <div onClick={() => deleteNoteHandler(note.id)}>Delete</div>
        <div onClick={() => isEditModalHandler(note)}>Edit</div>
        <div
          onClick={() => toggleFavoriteHandler(note.id)}
          className={note.isFavorite ? "favorite" : ""}
        >
          Favorite
        </div>
      </div>
    </div>
  );
}
