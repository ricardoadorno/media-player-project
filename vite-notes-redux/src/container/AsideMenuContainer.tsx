import "../style.scss";
import { useDispatch, useSelector } from "react-redux";
import { folderActions } from "../store/store";

export default function AsideMenuContainer() {
  const dispatch = useDispatch();

  const folders = useSelector((state: any) => state.folders.foldersList);

  return (
    <aside className="aside">
      <article>
        <h3>Notes List</h3>
        <h5>
          Folder
          <i
            className="new-folder"
            onClick={() =>
              dispatch(
                folderActions.addFolder({
                  name: "New Folder",
                })
              )
            }
          >
            +
          </i>
        </h5>

        {folders.map((folder: any) => (
          <div
            className={`folder-item ${folder.isSelected && "active"}`}
            key={folder.id}
            onClick={(e) => {
              switch (e.detail) {
                case 1: {
                  dispatch(folderActions.selectFolder(folder.id));
                  break;
                }
                case 2: {
                  dispatch(folderActions.openEditFolder(folder.id));
                  break;
                }
                default: {
                  break;
                }
              }
            }}
          >
            {folder.name}
            {folder.isEdit && (
              <form
                onSubmit={(e: any) => {
                  e.preventDefault();
                  dispatch(
                    folderActions.updateFolder({
                      id: folder.id,
                      name: e.target[0].value,
                    })
                  );
                }}
              >
                <input type="text" />
                <button type="submit">Confirm</button>
              </form>
            )}
          </div>
        ))}
      </article>
    </aside>
  );
}
