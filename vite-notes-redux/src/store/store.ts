import { configureStore, createSlice } from "@reduxjs/toolkit";

const folderSlice = createSlice({
  name: "folders",
  initialState: {
    foldersList: [
      {
        id: "1",
        name: "Folder 1",
        isSelected: true,
        isEdit: false,
        notes: [
          {
            id: "1",
            title: "Note 1",
            content: "Content 1",
            isFavorite: false,
          },
        ],
      },
      {
        id: "2",
        name: "Folder 2",
        isSelected: false,
        isEdit: false,
        notes: [
          {
            id: "2",
            title: "Note 2",
            content: "Content 2",
            isFavorite: false,
          },
        ],
      },
      {
        id: "3",
        name: "Folder 3",
        isSelected: false,
        isEdit: false,
        notes: [
          {
            id: "3",
            title: "Note 3",
            content: "Content 3",
            isFavorite: false,
          },
        ],
      },
    ],
  },
  reducers: {
    updateChanges: (state, actions) => {
      const { foldersList } = actions.payload;
      state.foldersList = foldersList;
    },

    selectFolder: (state, action) => {
      const folder = state.foldersList.find(
        (folder) => folder.id === action.payload
      );
      if (folder) {
        folder.isSelected = true;
      }
      // deselect all other folders
      state.foldersList.forEach((folder) => {
        if (folder.id !== action.payload) {
          folder.isSelected = false;
        }
      });
    },
    openEditFolder: (state, action) => {
      const folder = state.foldersList.find(
        (folder) => folder.id === action.payload
      );
      if (folder) {
        folder.isEdit = true;
      }
    },
    addFolder: (state, action) => {
      const { name } = action.payload;
      state.foldersList.push({
        id: Math.random().toString(),
        name,
        isSelected: false,
        isEdit: false,
        notes: [],
      });
    },
    deleteFolder: (state, action) => {
      state.foldersList = state.foldersList.filter(
        (folder) => folder.id !== action.payload
      );
    },
    updateFolder: (state, action) => {
      const { id, name } = action.payload;
      const folder = state.foldersList.find((folder) => folder.id === id);
      if (folder) {
        folder.name = name;
        folder.isEdit = false;
      }
    },
  },
});

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notesList: [],
  },
  reducers: {
    populateNotes: (state, action) => {
      if (action.payload) {
        state.notesList = action.payload;
      }
    },
    // Notes Crud
    addNote: (state, action) => {
      const { id, title, content } = action.payload;
      state.notesList.push({
        id: Math.random().toString(),
        title,
        content,
        isFavorite: false,
      });
    },
    deleteNote: (state, action) => {
      state.notesList = state.notesList.filter(
        (note) => note.id !== action.payload
      );
    },
    updateNote: (state, action) => {
      const { id, title, content } = action.payload;
      const note = state.notesList.find((note) => note.id === id);
      if (note) {
        note.title = title;
        note.content = content;
      }
    },
    toggleFavorite: (state, action) => {
      const note = state.notesList.find((note) => note.id === action.payload);
      if (note) {
        note.isFavorite = !note.isFavorite;
      }
    },
  },
});

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpen: false,
    modalType: "",
    modalProps: {
      id: "",
      title: "",
      content: "",
    },
  },
  reducers: {
    openModal: (state) => {
      state.modalProps = {
        id: "",
        title: "",
        content: "",
      };
      state.modalType = "add";
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.modalType = "";
      state.isModalOpen = false;
      state.modalProps = {
        id: "",
        title: "",
        content: "",
      };
    },

    isEditModal: (state, action) => {
      const { id, title, content } = action.payload;
      state.modalType = "edit";
      state.isModalOpen = true;
      state.modalProps = {
        id,
        title,
        content,
      };
    },
  },
});

export const notesActions = notesSlice.actions;
export const modalActions = modalSlice.actions;
export const folderActions = folderSlice.actions;

const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
    modal: modalSlice.reducer,
    folders: folderSlice.reducer,
  },
});

export default store;
