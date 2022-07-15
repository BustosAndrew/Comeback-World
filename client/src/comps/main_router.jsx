import { Home } from "./home";
import { About } from "./about";
import { Comeback_gen as ComebackGen } from "./comeback_gen";
import Login from "./login";
import { error as Error } from "./error";
import { nav as Nav } from "./nav";
import { Forums } from "./forums";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup } from "./signup";
import { Profile } from "./profile";
import { MyThreads } from "./my_threads";
import { NewThread } from "./new_thread";

export const main_router = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/comeback_gen" element={<ComebackGen />} />
                <Route path="/forums" element={<Forums />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/create-thread" element={<NewThread />} />
                <Route path="/user-profile" element={<Profile />} />
                <Route
                    path="/user-status"
                    element={<div>your login status</div>}
                />
                <Route path="/user-threads" element={<MyThreads />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
};
