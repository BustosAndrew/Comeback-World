import "../css/forums.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { PaginatedItems } from "./pagination";

export const Forums = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [currentItems, setCurrentItems] = useState(null);

    const itemsHandler = (itemOffset, endOffset) => {
        setCurrentItems(
            currentItems && currentItems.slice(itemOffset, endOffset)
        );
    };

    useEffect(() => {
        axios
            .get(
                "https://comeback-world-backend.herokuapp.com/threads/forum_threads"
            )
            .then((res) => setCurrentItems((arr) => [...arr, res.data]));
    });

    return (
        <div className="forums-container">
            <div className="menu">
                <Link id="view-link" className="forum-link" to="/user-threads">
                    <svg
                        width="60"
                        height="71"
                        viewBox="0 0 71 82"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M34.72 41.8C38.1368 41.8 40.9066 39.0302 40.9066 35.6134C40.9066 32.1966 38.1368 29.4268 34.72 29.4268C31.3032 29.4268 28.5334 32.1966 28.5334 35.6134C28.5334 39.0302 31.3032 41.8 34.72 41.8ZM44 55.3333V52.4968C44 47.4433 39.8452 43.3467 34.72 43.3467C29.5948 43.3467 25.44 47.4433 25.44 52.4968V55.3333H44ZM63.2941 0C65.3408 0 67 1.65655 67 3.7V70.3C67 72.3435 65.3408 74 63.2941 74H7.70588C5.65918 74 4 72.3435 4 70.3V3.7C4 1.65655 5.65918 0 7.70588 0H63.2941ZM12.8941 4.44C10.8474 4.44 9.18824 6.09655 9.18824 8.14C9.18824 10.1835 10.8474 11.84 12.8941 11.84H57.3647C59.4114 11.84 61.0706 10.1835 61.0706 8.14C61.0706 6.09655 59.4114 4.44 57.3647 4.44H12.8941ZM11.0412 19.98C10.0178 19.98 9.18824 20.8083 9.18824 21.83C9.18824 22.8517 10.0178 23.68 11.0412 23.68H59.2176C60.241 23.68 61.0706 22.8517 61.0706 21.83C61.0706 20.8083 60.241 19.98 59.2176 19.98H11.0412ZM11.0412 61.42C10.0178 61.42 9.18824 62.2483 9.18824 63.27C9.18824 64.2917 10.0178 65.12 11.0412 65.12H59.2176C60.241 65.12 61.0706 64.2917 61.0706 63.27C61.0706 62.2483 60.241 61.42 59.2176 61.42H11.0412Z"
                                fill="#F3F3F3"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d"
                                x="0"
                                y="0"
                                width="71"
                                height="82"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                    <p className="view-threads">My Threads</p>
                </Link>
                <Link
                    id="create-link"
                    className="forum-link"
                    to="/create-thread"
                >
                    <svg
                        width="60"
                        height="71"
                        viewBox="0 0 71 82"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M67 3.7C67 1.65655 65.3408 0 63.2941 0H7.70588C5.65918 0 4 1.65655 4 3.7V70.3C4 72.3435 5.65918 74 7.70588 74H63.2941C65.3408 74 67 72.3435 67 70.3V3.7ZM9.18824 8.14C9.18824 6.09655 10.8474 4.44 12.8941 4.44H57.3647C59.4114 4.44 61.0706 6.09655 61.0706 8.14C61.0706 10.1835 59.4114 11.84 57.3647 11.84H12.8941C10.8474 11.84 9.18824 10.1835 9.18824 8.14ZM9.18824 21.83C9.18824 20.8083 10.0178 19.98 11.0412 19.98H59.2176C60.241 19.98 61.0706 20.8083 61.0706 21.83C61.0706 22.8517 60.241 23.68 59.2176 23.68H11.0412C10.0178 23.68 9.18824 22.8517 9.18824 21.83ZM61.0706 32.19C61.0706 31.1683 60.241 30.34 59.2176 30.34H11.0412C10.0178 30.34 9.18824 31.1683 9.18824 32.19C9.18824 33.2117 10.0178 34.04 11.0412 34.04H59.2176C60.241 34.04 61.0706 33.2117 61.0706 32.19ZM9.18824 42.55C9.18824 41.5283 10.0178 40.7 11.0412 40.7H59.2176C60.241 40.7 61.0706 41.5283 61.0706 42.55C61.0706 43.5717 60.241 44.4 59.2176 44.4H11.0412C10.0178 44.4 9.18824 43.5717 9.18824 42.55ZM61.0706 52.91C61.0706 51.8883 60.241 51.06 59.2176 51.06H11.0412C10.0178 51.06 9.18824 51.8883 9.18824 52.91C9.18824 53.9317 10.0178 54.76 11.0412 54.76H59.2176C60.241 54.76 61.0706 53.9317 61.0706 52.91ZM9.18824 63.27C9.18824 62.2483 10.0178 61.42 11.0412 61.42H59.2176C60.241 61.42 61.0706 62.2483 61.0706 63.27C61.0706 64.2917 60.241 65.12 59.2176 65.12H11.0412C10.0178 65.12 9.18824 64.2917 9.18824 63.27Z"
                                fill="#F3F3F3"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d"
                                x="0"
                                y="0"
                                width="71"
                                height="82"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                    <div className="forums-create">
                        <p className="create-thread">Create Thread</p>
                    </div>
                </Link>
            </div>
            <div className="thread-container">
                <div className="threads">
                    <div
                        className={openPopup ? "hide-border" : "filter-closed"}
                        onClick={() => setOpenPopup(!openPopup)}
                    >
                        <span className={openPopup ? "filter-hide-text" : null}>
                            Filter by &#709;
                        </span>
                        {openPopup ? (
                            <div className="filter-opened">
                                <span className="">^</span>
                            </div>
                        ) : null}
                    </div>
                    <div
                        className={
                            openPopup ? "filter-popup" : "filter-hide-text"
                        }
                    >
                        <br />
                        <span className="filter-title">Filter by</span>
                        <ul
                            style={{
                                display: "inline",
                                listStyle: "none",
                                color: "#A3A3A3",
                            }}
                        >
                            <li className="options">
                                <label>&nbsp;&nbsp;Most Upvoted</label>
                                &nbsp;&nbsp;
                                <input type="checkbox"></input>
                            </li>
                            <li className="options">
                                <label>&nbsp;&nbsp;Newest</label>&nbsp;&nbsp;
                                <input type="checkbox"></input>
                            </li>
                            <li className="options">
                                <label>&nbsp;&nbsp;Oldest</label>
                                &nbsp;&nbsp;&nbsp;
                                <input type="checkbox"></input>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="items">
                    {currentItems &&
                        currentItems.map((item, indx) => (
                            <div key={indx} className="thrd">
                                <img
                                    alt=""
                                    className="upvote"
                                    src="src/img/blank_profile.jpeg"
                                />
                                <h3>Item #{item}</h3>
                            </div>
                        ))}
                </div>
                <div style={{ margin: "auto auto 0 auto", marginTop: "auto" }}>
                    <PaginatedItems
                        itemsPerPage={4}
                        itemsHandler={itemsHandler}
                        numOfItems={(currentItems && currentItems.length) || 1}
                    />
                </div>
            </div>
        </div>
    );
};
