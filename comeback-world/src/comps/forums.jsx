import '../css/forums.css';
import { Link } from 'react-router-dom';

export const forums = () => {
    return (
        <div className="container">
            <div className="menu">
                <Link id="view-profile" className="forum-link">
                    <div className="forums-profile">
                        <p>PROFILE</p>
                    </div>
                </Link>
                <Link id="view-status" className="forum-link">
                    <p className="login-status">SIGN OUT</p>
                </Link>
                <Link className="forum-link" id="home-link" to="/">
                    <div className="forums-home">
                        <p>HOME</p>
                    </div>
                </Link>
                <Link id="view-link" className="forum-link">
                    <p className="view-threads">
                        VIEW YOUR<br></br>THREADS
                    </p>
                </Link>
                <Link id="create-link" className="forum-link">
                    <div className="forums-create">
                        <p>CREATE THREAD</p>
                    </div>
                </Link>
            </div>
            <div className="thread-container">
                <div className="threads">
                    <div id="filter">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    <div id="first-thread" className="thrd">
                        <img id="upvote" src="upvote.png" />
                    </div>
                    <div className="thrd">
                        <img id="upvote" src="upvote.png" />
                    </div>
                    <div className="thrd">
                        <img id="upvote" src="upvote.png" />
                    </div>
                    <div className="thrd">
                        <img id="upvote" src="upvote.png" />
                    </div>
                    <div className="thrd">
                        <img id="upvote" src="upvote.png" />
                    </div>
                    <div className="thrd">
                        <img id="upvote" src="upvote.png" />
                    </div>
                    <div className="thrd">
                        <img id="upvote" src="upvote.png" />
                    </div>
                    <div className="thrd">
                        <img id="upvote" src="upvote.png" />
                    </div>
                </div>
                <div className="thread-nav">
                    <span id="thread-prev">PREV&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span id="thread-next">NEXT</span>
                    <br />
                    <br />
                    <div id="thread-pgs">nums</div>
                </div>
            </div>
        </div>
    );
};
