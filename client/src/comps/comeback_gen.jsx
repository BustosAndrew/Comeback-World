import '../css/generator.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Comeback_gen = () => {
    const [comebacks, setComebacks] = useState([]);
    const [token, setToken] = useState(null);
    const url = 'https://generatorfun.com/consumeapi.php?api=';

    useEffect(() => {
        axios.get('http://localhost:5000/comebacks/comeback').then((res) => {
            setToken(res.data);
            console.log(res.data);
        });
    }, []);

    const getComebacks = (requests) => {
        for (let i = 0; i < requests; i++) {
            axios
                .get(url + token, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                })
                .then((res) => setComebacks((arr) => [...arr, res.data]));
        }
    };

    return (
        <div>
            <main className="gen">
                <aside>
                    <button className="gen-btn" onClick={() => getComebacks(2)}>
                        Generate A New Comeback
                    </button>
                </aside>
                <section>
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
