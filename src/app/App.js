import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QualitiesProvider } from "./hooks/useQualities";
import Users from "./layouts/users";
import AuthProvider from "./hooks/useAuth";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import { ProfessionProvider } from "./hooks/useProfession";
import UserProvider from "./hooks/useUsers";

function App() {
  return (
    <div>
      <AuthProvider>
        <NavBar/>
        <QualitiesProvider>
          <ProfessionProvider>
            <UserProvider>
              <Switch>
                <Route path="/users/:userId?/:edit?" component={Users}/>
                <Route path="/login/:type?" component={Login}/>
                <Route path="/" exact component={Main}/>
                <Redirect to="/"/>
              </Switch>
            </UserProvider>
          </ProfessionProvider>
        </QualitiesProvider>
      </AuthProvider>
      <ToastContainer/>
    </div>
  );
}

export default App;
