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
                            &nbsp;&nbsp;
                            <svg
                                width="34"
                                height="34"
                                viewBox="0 0 58 58"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g filter="url(#filter0_d)">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M54 0H4V50H54V0ZM44 10.0001H34V20.0001H44V10.0001ZM34 20.0002H24V30.0002H34V20.0002ZM34 30.5001H44V40.5001H34V30.5001ZM24 30.5001H14V40.5001H24V30.5001ZM14 10.0001H24V20.0001H14V10.0001Z"
                                        fill="#F3F3F3"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_d"
                                        x="0"
                                        y="0"
                                        width="58"
                                        height="58"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                    >
                                        <feFlood
                                            flood-opacity="0"
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
                        </span>
                        <span className="right">
                            <Link to="/forums">Comeback Forums</Link>
                            &nbsp;&nbsp;
                            <svg
                                width="34"
                                height="41"
                                viewBox="0 0 34 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g filter="url(#filter0_d)">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M29.08 6.72222C29.08 3.00964 26.0704 0 22.3578 0H10.7222C7.00964 0 4 3.00964 4 6.72222V26.2778C4 29.9904 7.00964 33 10.7222 33H22.3578C26.0704 33 29.08 29.9904 29.08 26.2778V6.72222ZM26.11 4.125C26.11 2.94035 25.1497 1.98 23.965 1.98H9.11501C7.93036 1.98 6.97001 2.94035 6.97001 4.125C6.97001 5.30965 7.93036 6.27 9.11501 6.27H23.965C25.1497 6.27 26.11 5.30965 26.11 4.125ZM17.1267 13.0792C17.1267 12.8165 17.1489 12.6232 17.1781 12.4825C17.2273 12.2462 17.4495 12.1293 17.6683 12.2311C18.3835 12.5642 19.4046 13.658 19.9692 15.2004C20.6022 16.9298 22.1892 17.7494 23.7225 17.2938C25.0096 16.9114 25.9812 15.7235 26.2762 14.018C26.3626 13.5192 25.956 13.0941 25.45 13.0792C24.9439 13.0644 24.5377 13.4684 24.42 13.9608C24.1814 14.9599 23.6228 15.4109 23.2003 15.5364C22.6942 15.6868 22.0276 15.4905 21.6908 14.5703C21.0159 12.7263 19.7269 11.1674 18.4421 10.5691C17.7954 10.268 16.9235 10.1236 16.1979 10.683C15.5219 11.2042 15.2956 12.1038 15.2933 13.0648C15.2416 14.7028 14.4928 15.3782 13.9603 15.5364C13.4542 15.6868 12.7876 15.4905 12.4508 14.5703C11.7759 12.7263 10.4869 11.1674 9.2021 10.5691C8.55537 10.268 7.68347 10.1236 6.95786 10.683C6.49927 11.0366 6.24764 11.5643 6.13252 12.1673C6.03758 12.6646 6.46373 13.0792 6.96999 13.0792H7.15516C7.55915 13.0792 7.84 12.5561 8.03223 12.2008C8.1064 12.0637 8.16029 12.1273 8.30682 12.1804C8.3426 12.1934 8.38293 12.21 8.42825 12.2311C9.14355 12.5642 10.1646 13.658 10.7292 15.2004C11.3622 16.9298 12.9492 17.7494 14.4825 17.2938C15.988 16.8465 17.0619 15.2971 17.1263 13.1061L17.1267 13.0927V13.0792ZM17.2994 12.1448C17.2987 12.1431 17.3002 12.1464 17.2994 12.1448V12.1448ZM8.05942 12.1448C8.05866 12.1431 8.06019 12.1464 8.05942 12.1448V12.1448ZM17.6683 21.8011C17.4495 21.6993 17.2273 21.8162 17.1781 22.0525C17.1489 22.1932 17.1267 22.3865 17.1267 22.6492V22.6627L17.1263 22.6761C17.0619 24.8671 15.988 26.4165 14.4825 26.8638C12.9492 27.3194 11.3622 26.4998 10.7292 24.7704C10.1646 23.228 9.14355 22.1342 8.42825 21.8011C8.38294 21.78 8.3426 21.7634 8.30682 21.7504C8.16029 21.6972 8.1064 21.6337 8.03223 21.7708C7.84 22.1261 7.55916 22.6492 7.15516 22.6492H6.96999C6.46373 22.6492 6.03758 22.2346 6.13252 21.7373C6.24764 21.1343 6.49927 20.6066 6.95786 20.253C7.68347 19.6936 8.55537 19.838 9.2021 20.1391C10.4869 20.7374 11.7759 22.2963 12.4508 24.1403C12.7876 25.0605 13.4542 25.2568 13.9603 25.1064C14.4928 24.9482 15.2416 24.2728 15.2933 22.6348C15.2956 21.6738 15.5219 20.7741 16.1979 20.253C16.9235 19.6935 17.7954 19.838 18.4421 20.1391C19.7269 20.7374 21.0159 22.2963 21.6908 24.1403C22.0276 25.0605 22.6942 25.2568 23.2003 25.1064C23.6228 24.9809 24.1814 24.5299 24.42 23.5308C24.5377 23.0384 24.9439 22.6344 25.45 22.6492C25.956 22.6641 26.3626 23.0892 26.2762 23.588C25.9812 25.2935 25.0096 26.4814 23.7225 26.8638C22.1892 27.3194 20.6022 26.4998 19.9692 24.7704C19.4046 23.228 18.3835 22.1342 17.6683 21.8011ZM17.2994 21.7148C17.2987 21.7131 17.3002 21.7164 17.2994 21.7148V21.7148ZM8.05942 21.7148C8.05866 21.7131 8.06019 21.7164 8.05942 21.7148V21.7148Z"
                                        fill="#F3F3F3"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_d"
                                        x="0"
                                        y="0"
                                        width="33.08"
                                        height="41"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                    >
                                        <feFlood
                                            flood-opacity="0"
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
                        </span>
                        <Link to="/login" id="login">
                            Login / Signup
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
