import '../css/main.css';
import '../css/footer.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="home">
            <section style={{ textAlign: 'center', paddingTop: '20px' }}>
                <h1 style={{ color: 'whitesmoke' }}>
                    Welcome to Comeback World
                </h1>
                <h4 style={{ color: 'whitesmoke' }}>
                    The reddit of comebacks ;).
                </h4>
                <Link to="/signup" id="signup">
                    <p>Sign Up</p>
                </Link>
            </section>
            <aside>
                <div id="ex1">Generator Ex</div>
                <div id="ex2">Forums Example</div>
            </aside>
            <div
                style={{
                    textAlign: 'center',
                    marginTop: '100px',
                    color: 'whitesmoke',
                    fontWeight: 'bold',
                    fontSize: '20px',
                }}
            >
                So what are you waiting for? Dive right into the comeback
                sensation that will take over the internet!
            </div>
            <footer style={{ textAlign: 'center' }}>
                <p>The Comeback Trio &#169; 2021</p>
            </footer>
        </div>
    );
};
