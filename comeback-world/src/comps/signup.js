import '../css/signup.css';
import { Link } from 'react-router-dom';

export const signup = () => {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <main className="signup-main">
            <section className="signup-sect">
                <h2 id="title">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label for="fullname">Name:</label>
                    <br />
                    <input type="text" id="signup-fullname" name="fullname" />
                    <br />
                    <label for="username">Username:</label>
                    <br />
                    <input type="text" id="username" name="username" />
                    <br />
                    <label for="password">Password:</label>
                    <br />
                    <input type="text" id="password" name="password" />
                    <br />
                    <label for="password2">Re-enter Password:</label>
                    <br />
                    <input type="text" id="password2" name="password2" />
                    <br />
                    <label for="email">Email:</label>
                    <br />
                    <input type="text" id="email" name="email" />
                    <br />
                    <div className="signup-btns">
                        <Link id="signup-home" to="/">
                            #&nbsp;HOME
                        </Link>
                        <input type="submit" value="Sign Up" id="submit" />
                    </div>
                </form>
            </section>
        </main>
    );
};
