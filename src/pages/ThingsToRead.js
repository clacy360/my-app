import { useState } from "react";

export default function ThingsToRead() {

    return (
        <div className='container'>
            <header className="ThingsToRead-header">
                <p>Things to Read</p>

                <subtitle className="ThingsToRead-subtitle">
                    <ul>
                        <a
                            className="Home-link"
                            href="https://www.uwb.edu/financial-aid/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            UWB Financial Aid
                        </a>

                    </ul>

                    <ul>
                        <a
                            className="Home-link"
                            href="https://www.linkedin.com/in/cami-lacy/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cami Lacy LinkedIn
                        </a>


                    </ul>

                    <ul>
                        <a
                            className="Home-link"
                            href="https://github.com/clacy360"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repositories
                        </a>

                    </ul>

                    <ul>
                        <a
                            className="Home-link"
                            href="https://joinhandshake.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Handshake: Students Sign-In
                        </a>

                    </ul>

                    <ul>
                        <a
                            className="Home-link"
                            href="https://www.uwb.edu/academic-support-programs/qsc"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Quantitative Skills Center
                        </a>

                    </ul>

                    <ul>
                        <a
                            className="Home-link"
                            href="https://www.uwb.edu/academic-support-programs/wacc"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Writing and Communication Center
                        </a>

                    </ul>

                    <ul>
                        <a
                            className="Home-link"
                            href="https://www.uwb.edu/sea/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Student Engagement and Activities
                        </a>

                    </ul>

                    <ul>
                        <a
                            className="Home-link"
                            href="https://library.uwb.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            UWB Library Resources
                        </a>

                    </ul>

                    <ul>
                        <a
                            className="Home-link"
                            href="https://www.uwb.edu/academic-calendar/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            UWB Academic Calendar
                        </a>

                    </ul>

                    <ul>
                        <a
                            className="Home-link"
                            href="https://www.uwb.edu/calendar"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            UWB Events Calendar
                        </a>

                    </ul>
                </subtitle>
            </header>

        </div>

    );
}