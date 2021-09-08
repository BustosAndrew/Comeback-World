import "../css/login.css";
import { Link } from "react-router-dom";

export default function login() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <main className="login-signup">
            <aside className="login-aside">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" />
                    <br />
                    <input type="text" name="password" placeholder="Password" />
                    <br />
                    <input type="submit" value="Login" id="login-submit" />
                </form>
                <div className="signup">
                    <h4 className="or">
                        <hr></hr>OR<hr></hr>
                    </h4>
                    <p>
                        Don't have an account?{" "}
                        <Link to="/signup" id="signup-btn">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </aside>
        </main>
    );
}
