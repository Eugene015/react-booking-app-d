import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/common/protectedRoute";
import RoomPage from "./layouts/roomPage";
import MainPage from "./layouts/mainPage";
import RoomsProvider from "./hooks/useRooms";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";
import AppLoader from "./components/hoc/appLoader";
import UserPage from "./layouts/userPage";

function App() {
  return (
    <AppLoader>
      <RoomsProvider>
        <Switch>
          <ProtectedRoute path="/users/:userId?/:edit?" component={UserPage} />
          <Route path="/login/:type?" component={Login} />
          <Route path="/logout" component={LogOut} />
          <Route path="/roomsPage/:roomId" component={RoomPage} />
          <Route path="/" exact component={MainPage} />
          <Redirect to="/" />
        </Switch>
      </RoomsProvider>
    </AppLoader>
  );
}

export default App;
