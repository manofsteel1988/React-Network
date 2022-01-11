import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import MainLayout from "./layout/MainLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    author: "Suge Knight",
    authorPicture: "https://picsum.photos/seed/profile53/50/50",
  });
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <MainLayout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route exact path="/profile">
                <ProfilePage />
              </Route>
            </Switch>
          </MainLayout>
        </Router>
      </UserContext.Provider>
    </>
  );
}
export default App;
