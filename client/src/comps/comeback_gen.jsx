import '../css/generator.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Comeback_gen = () => {
    const [comebacks, setComebacks] = useState([]);
    const [limit, setLimit] = useState(1);

    const getComebacks = (requests) => {
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
                <aside>
                    <div
                        className="gen-btn"
                        onClick={() => getComebacks(limit)}
                    >
                        Generate A New Comeback
                    </div>
                    <br />
                    <div className="gen-input">
                        <label for="limit">
                            <u>
                                <b>Limit</b>
                            </u>
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
                </aside>
                <section>
                    <p>UR stuff here..........</p>
                    {comebacks.map((comeback, index) => (
                        <div className="comeback" key={index}>
                            {comeback}
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};
