import { Home } from "./home";
import { About } from "./about";
import { Comeback_gen as Comeback_Gen } from "./comeback_gen";
import Login from "./login";
import { error as Error } from "./error";
import { nav as Nav } from "./nav";
import { Forums as Forums } from "./forums";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Signup as Signup } from "./signup";
import { Profile as Profile } from "./profile";
import { MyThreads as MyThreads } from "./my_threads";
import { NewThread as NewThread } from "./new_thread";

export const main_router = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/comeback_gen">
                    <Comeback_Gen />
                </Route>
                <Route path="/forums">
                    <Forums />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/create-thread">
                    <NewThread />
                </Route>
                <Route path="/user-profile">
                    <Profile />
                </Route>
                <Route path="/user-status">
                    <div>your login status</div>
                </Route>
                <Route path="/user-threads">
                    <MyThreads />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
};
