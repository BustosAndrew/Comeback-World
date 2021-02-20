import './nav.css';
import './main.css';
import 'footer.css';

function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <span className="left">
                        <a href="">About</a>
                    </span>
                    <span className="middle">
                        <a href="">Comeback Generator</a>
                    </span>
                    <span className="right">
                        <a href="">Comeback Forums</a>
                    </span>
                    <a id="login" href="">
                        <h3>Login</h3>
                    </a>
                </nav>
            </header>
            <section style={{ textAlign: 'center', paddingTop: '20px' }}>
                <h1 style={{ color: 'whitesmoke' }}>
                    Welcome to Comeback World
                </h1>
                <h4 style={{ color: 'whitesmoke' }}>
                    The reddit of comebacks ;).
                </h4>
                <a href="" id="signup">
                    <p>Sign Up</p>
                </a>
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
}

export default App;
