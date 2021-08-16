import '../css/main.css';
import '../css/footer.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="home">
            <aside>
                <div id="card">
                    <div id="intro">
                        <h1 style={{ color: 'var(--dark-font)' }}>
                            Welcome to Comeback World
                        </h1>
                        <h4 style={{ color: 'var(--dark-font)' }}>
                            The reddit of comebacks ;)
                        </h4>
                    </div>
                    <div id="vids">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        ></iframe>
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        ></iframe>
                    </div>
                    <div id="outro">
                        <h3>
                            So what are you waiting for? Dive right into the
                            comeback sensation that will take over the internet!
                        </h3>
                    </div>
                </div>
            </aside>
            <footer style={{ textAlign: 'center' }}>
                <p>The Comeback Trio &#169; 2021</p>
            </footer>
        </div>
    );
};
