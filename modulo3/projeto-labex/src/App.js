import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/LoginPage/LoginPage";
import ApplicationFormPage from "./pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage/CreateTripPage";
import ListTripPage from "./pages/ListTripsPage/ListTripsPage";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/trip/list"}>
          <ListTripPage />
        </Route>

        <Route exact path={"/trip/form"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/login"}>
          <Login />
        </Route>

        <Route exact path={"/adim/create"}>
          <CreateTripPage />
        </Route>

        <Route>
          <h1>Error page</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
