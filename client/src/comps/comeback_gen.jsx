import '../css/generator.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Comeback_gen = () => {
    const [comebacks, setComebacks] = useState([]);
    const [limit, setLimit] = useState(1);

    const getComebacks = (requests) => {
        setComebacks([]);
        for (let i = 0; i < requests; i++) {
            axios
                .get(
                    'https://comeback-world-backend.herokuapp.com/comebacks/comeback',
                )
                .then((res) => setComebacks((arr) => [...arr, res.data]));
        }
    };

    return (
        <div>
            <main className="gen">
                <div className="container">
                    <hr className="top-hr" />
                    <div className="content">
                        {comebacks.map((comeback, index) => (
                            <div className="comeback" key={index}>
                                {comeback}
                            </div>
                        ))}
                    </div>
                    <br />
                    <div className="gen-input">
                        <h4>Generate</h4>
                        <svg
                            onClick={() => getComebacks(limit)}
                            width="33"
                            height="33"
                            viewBox="0 0 33 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            id="input-icon"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M33 0H0V33H33V0ZM6.6 6.59999H13.2V13.2H6.6V6.59999ZM26.4 6.60001H19.8V13.2H26.4V6.60001ZM19.8 13.2H13.2V19.8H19.8V13.2ZM19.8 20.13H26.4V26.73H19.8V20.13ZM13.2 20.13H6.60001V26.73H13.2V20.13Z"
                                fill="#A3A3A3"
                            />
                        </svg>
                        <br />
                        <label for="limit">
                            <b>Limit&nbsp;</b>
                        </label>
                        <select
                            name="limit"
                            onChange={(e) => setLimit(e.target.value)}
                            id="limit"
                        >
                            <option selected value={1}>
                                1
                            </option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                    <br />
                    <hr className="low-hr" />
                </div>
            </main>
        </div>
    );
};
