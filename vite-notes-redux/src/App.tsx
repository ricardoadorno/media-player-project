import AsideMenuContainer from "./container/AsideMenuContainer";
import NotesDisplayContainer from "./container/NotesDisplayContainer";

function App() {
  return (
    <div className="container">
      <div className="parent">
        <AsideMenuContainer />
        <NotesDisplayContainer />
      </div>
    </div>
  );
}

export default App;
