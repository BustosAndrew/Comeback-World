import "../css/signup.css";
import { Link } from "react-router-dom";

export const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <main className="signup-card">
            <aside className="signup-aside">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                    />
                    <br />
                    <input type="text" name="username" placeholder="Username" />
                    <br />
                    <input type="text" name="email" placeholder="Email" />
                    <br />
                    <input type="text" name="password" placeholder="Password" />
                    <br />
                    <input
                        type="text"
                        name="password2"
                        placeholder="Confirm Password"
                    />
                    <br />
                    <input
                        type="submit"
                        value="Create Account"
                        id="signup-submit"
                    />
                </form>
                <div className="login">
                    <h4 className="or">
                        <hr></hr>OR<hr></hr>
                    </h4>
                    <p>
                        Have an account?{" "}
                        <Link to="/login" id="login-btn">
                            Log in
                        </Link>
                    </p>
                </div>
            </aside>
        </main>
    );
};
