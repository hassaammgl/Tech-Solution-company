import React from "react";
import "../style/Home.css";
import vg from '../assets/2.png'

const Home = () => {
    return (
        <>
            <div className="home">
                <main>
                    <h1>TechGhost</h1>
                    <p>Here's a solution of your all problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are the only Tech company, with the aim to guide the
                        problems you face everyday. Who wants to increase the
                        problem solving ability in your childrens.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
