import '../css/login.css';
import { Link } from 'react-router-dom';

export default function login() {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <main className="login-signup">
            <aside className="login-aside">
                <h2 id="login-title">Login</h2>
                <form onSubmit={handleSubmit}>
                    <label for="username">Username:</label>
                    <br />
                    <input type="text" id="login-username" name="username" />
                    <br />
                    <label for="password">Password:</label>
                    <br />
                    <input type="text" id="login-password" name="password" />
                    <br />
                    <input type="submit" value="Login" id="login-submit" />
                    <br />
                    <Link id="login-home" to="/">
                        #&nbsp;HOME
                    </Link>
                </form>
            </aside>
            <section className="signup-section">
                <h2 id="signup-title">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label for="fullname">Name:</label>
                    <br />
                    <input type="text" id="fullname" name="fullname" />
                    <br />
                    <label for="username">Username:</label>
                    <br />
                    <input type="text" id="signup-username" name="username" />
                    <br />
                    <label for="password">Password:</label>
                    <br />
                    <input type="text" id="signup-password" name="password" />
                    <br />
                    <label for="password2">Re-enter Password:</label>
                    <br />
                    <input type="text" id="signup-password2" name="password2" />
                    <br />
                    <label for="email">Email:</label>
                    <br />
                    <input type="text" id="signup-email" name="email" />
                    <br />
                    <input type="submit" value="Sign Up" id="signup-submit" />
                </form>
            </section>
        </main>
    );
}
