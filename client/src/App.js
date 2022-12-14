import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/common/protectedRoute";
import MainPage from "./layouts/mainPage";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";
import AppLoader from "./components/hoc/appLoader";
import RoomsListPage from "./layouts/roomsListPage";
import RoomPage from "./layouts/roomPage";
import Users from "./layouts/users";

function App() {
  return (
    <AppLoader>
      <Switch>
        <ProtectedRoute path="/users/:userId?/:edit?" component={Users} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/logout" component={LogOut} />
        <Route path="/roomsPage/:roomId" component={RoomPage} />
        <Route path="/roomsPage/" component={RoomsListPage} />
        <Route path="/" exact component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </AppLoader>
  );
}

export default App;
