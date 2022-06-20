import React from "react";

const About = () => {
    return (
        <>
            <h4 className="aboutPgTitle">About this application...</h4>
            <div className="aboutPgContainer">
                <p className="indent paragraphTitle">
                    {'\t'}This application was created by Neo Xavier Temores, in memory of U.S. Army Specialist Hunter Alan Ritter. </p>

                <p className="indent paragraphBody">Hunter, my brother, please forgive me. I am sorry for letting you down, and for not noticing that you were in pain. I am sorry that you felt alone, and for never asking if you were okay.
                    One day, when we meet again, I hope that you accept my apology. Until then brother, I hope you know that I will continue to share my screen with you.</p>

                <p>Your memory will live on, may you rest in peace.</p>

                <div className="sssLinkDiv">
                    <a className="sssLink" href="https://stopsoldiersuicide.org/" target="_blank">Stop Soldier suicide</a>
                </div>
            </div>
        </>
    )
}

export default About