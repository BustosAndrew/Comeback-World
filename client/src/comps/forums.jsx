import '../css/forums.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Forums = () => {
    const [openPopup, setOpenPopup] = useState(false);

    return (
        <div className="forums-container">
            <div className="menu">
                <Link
                    id="view-profile"
                    className="forum-link"
                    to="/user-profile"
                >
                    <div className="forums-profile">
                        <p>PROFILE</p>
                    </div>
                </Link>
                <Link id="view-status" className="forum-link" to="/user-status">
                    <p className="login-status">SIGN OUT</p>
                </Link>
                <Link className="forum-link" id="home-link" to="/">
                    <div className="forums-home">
                        <p style={{ fontSize: '1vw' }}>HOME</p>
                    </div>
                </Link>
                <Link id="view-link" className="forum-link" to="/user-threads">
                    <p className="view-threads">
                        VIEW YOUR<br></br>THREADS
                    </p>
                </Link>
                <Link
                    id="create-link"
                    className="forum-link"
                    to="/create-thread"
                >
                    <div className="forums-create">
                        <p>CREATE THREAD</p>
                    </div>
                </Link>
            </div>
            <div className="thread-container">
                <div className="threads">
                    <div
                        className={openPopup ? 'hide-border' : 'filter-closed'}
                        onClick={() => setOpenPopup(!openPopup)}
                    >
                        <hr className={openPopup ? 'filter-hide-hrs' : null} />
                        <hr className={openPopup ? 'filter-hide-hrs' : null} />
                        <hr className={openPopup ? 'filter-hide-hrs' : null} />
                        {openPopup ? (
                            <div className="filter-opened">
                                <span className="">&#10005;</span>
                            </div>
                        ) : null}
                    </div>
                    <div
                        className={
                            openPopup ? 'filter-popup' : 'filter-hide-hrs'
                        }
                    >
                        <ul
                            style={{
                                display: 'inline-block',
                                listStyle: 'none',
                                color: '#6f0303',
                            }}
                        >
                            <li>Filter by age or most upvoted.</li>
                            <br />
                        </ul>
                        <ul
                            style={{
                                display: 'inline-block',
                                listStyle: 'none',
                                color: '#6f0303',
                            }}
                        >
                            <li>
                                <input type="checkbox"></input>
                                <label>Most Upvoted</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label>Newest</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label>Oldest</label>
                            </li>
                        </ul>
                    </div>
                    <div className="thrd">
                        <img className="upvote" src="upvote.png" />
                        <div className="thrd-content">
                            <span>Posted by: </span>
                            <p>Title here...</p>
                        </div>
                    </div>
                </div>
                <div className="thread-nav">
                    <span id="thread-prev">PREV</span>
                    <span id="thread-next">NEXT</span>
                    <br />
                    <div id="thread-pgs">nums</div>
                </div>
            </div>
        </div>
    );
};

// LoadNextPage()

// LoadPreviousPage()
