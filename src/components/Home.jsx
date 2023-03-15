import React from "react";
import "../style/Home.css";
import vg from "../assets/2.png";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";


const Home = () => {
    return (
        <>
            <div className="home" id="home">
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
            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Culpa tenetur iure pariatur aspernatur itaque ab
                        repudiandae, deserunt sequi. Perferendis dolorem
                        inventore, cumque fugit ratione provident. At,
                        consequatur laborum minima, atque assumenda eius nostrum
                        repellat perspiciatis et ipsam dicta. Enim, est
                        exercitationem! Maiores cupiditate maxime sed suscipit
                        fuga quod explicabo perspiciatis consequuntur odio
                        fugiat tempora, repellendus libero magnam, voluptatem
                        non ullam vitae eaque, laborum neque sunt autem
                        adipisci.Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Culpa tenetur iure pariatur aspernatur
                        itaque ab repudiandae, deserunt sequi. Perferendis
                        dolorem inventore, cumque fugit ratione provident. At,
                        consequatur laborum minima, atque assumenda eius nostrum
                        repellat perspiciatis et ipsam dicta.
                    </p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div
                            style={{
                                animationDelay: ".5s",
                            }}
                        >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div
                            style={{
                                animationDelay: ".8s",
                            }}
                        >
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "1.1s",
                            }}
                        >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "1.5s",
                            }}
                        >
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Home;
