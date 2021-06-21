import '../css/nav.css';
import { Link, useLocation } from 'react-router-dom';

export const nav = () => {
    if (InLoginPage()) return null;
    else if (InSignUpPage()) return null;
    else {
        return (
            <div>
                <header>
                    <nav>
                        <span className="left">
                            <Link to="/about">About</Link>
                        </span>
                        <span className="middle">
                            <Link to="/comeback_gen">Comeback Generator</Link>
                        </span>
                        <span className="right">
                            <Link to="/forums">Comeback Forums</Link>
                        </span>
                        <Link to="/login" id="login">
                            <h3>Login</h3>
                        </Link>
                    </nav>
                </header>
            </div>
        );
    }
};

function InLoginPage() {
    if (useLocation().pathname === '/login') return true;
    else return false;
}

function InSignUpPage() {
    if (useLocation().pathname === '/signup') return true;
    else return false;
}
