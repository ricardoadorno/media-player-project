import DisplayContainer from "./containers/DisplayContainer";
import PlayerContainer from "./containers/PlayerContainer";
import SideBarContainer from "./containers/SideBarContainer";

export default function App() {
  return (
    <>
      <SideBarContainer />
      <DisplayContainer />
      <PlayerContainer />
    </>
  );
}
