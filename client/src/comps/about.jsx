import '../css/about.css';
import blank_profile from '../img/blank_profile.png';

export const About = () => {
    return (
        <div className="about">
            <main>
                <h1>
                    Comeback World: the site to change all things comeback :D
                </h1>
                <h2>Developed by multiple aspiring web developers.</h2>
                <section>
                    <h1>THE TEAM</h1>
                <div className="image-group">
                    <div className="imgs">
                        <img src={blank_profile} alt="Andrew"/>
                            <p>Andrew</p>
                    </div>

                    <div className="imgs">
                        <img src={blank_profile} alt="Ryan"/>
                            <p>Ryan</p>
                    </div>

                    <div className="imgs">
                        <img src={blank_profile} alt=""/>
                            <p>Random</p>
                    </div>

                    <div className="imgs">
                        <img src={blank_profile} alt=""/>
                            <p>Random</p>
                    </div>

                    <div className="imgs">
                        <img src={blank_profile} alt=""/>
                            <p>Random</p>
                    </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
