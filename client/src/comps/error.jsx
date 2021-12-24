import { useLocation, Link } from 'react-router-dom';
import '../css/error.css';

export const error = () => {
    if (!(GetPath() === '/login'))
        return (
            <div id="paren">
                <main className="error-main">
                    <h1>Page not found...</h1>
                    <Link to="/">
                        <h2>Home</h2>
                    </Link>
                </main>
            </div>
        );
    else return null;
};

function GetPath() {
    return useLocation().pathname;
}