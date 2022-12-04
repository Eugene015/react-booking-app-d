import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import RoomPage from "./layouts/roomPage";
import MainPage from "./layouts/mainPage";
import RoomsProvider from "./hooks/useRooms";

function App() {
  return (
    <div>
      <RoomsProvider>
        <Switch>
          <Route path="/roomPage" component={RoomPage} />
          <Route path="/" exact component={MainPage} />
          <Redirect to="/" />
        </Switch>
      </RoomsProvider>
    </div>
  );
}

export default App;
