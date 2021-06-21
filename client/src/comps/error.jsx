import { useLocation, Link } from 'react-router-dom';
import '../css/error.css';

export const error = () => {
    if (!(GetPath() === '/login'))
        return (
            <div id="parent">
                <main className="error-main">
                    <h1>Error: page not found...</h1>
                    <Link to="/">
                        <h2># HOME</h2>
                    </Link>
                </main>
            </div>
        );
    else return null;
};

function GetPath() {
    return useLocation().pathname;
}
