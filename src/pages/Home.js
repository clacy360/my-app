import SnorlaxSleep from '../images/SnorlaxSleep.jpg';

import { useState } from "react";

export default function Home() {
    function ListWithButton() {
        // state to hold my list
        const [list, setList] = useState(['Snorlax', 'Crochet', 'Art', 'Movies', 'TV Shows', 'Sleeping']);

        const reorderList = () => {
            // reorder the list when button is clicked
            const newList = [...list].reverse();
            setList(newList);
        }

        return (
            <div>
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <button onClick={reorderList}>Reorder List</button>
            </div>
        )
    }
    return (

        <div className="Home">

            <header className="Home-header">

                <p>
                    Welcome to my website!
                </p>
                <br />



                <img src={SnorlaxSleep} className="Home-logo" alt="logo" />


                <subtitle className="Home-subtitle">
                    <br />
                    <p>
                        My name is Cami Lacy, and I am a graduating senior from the University of Washington Bothell. I am majoring in Computer Science and Software Engineering while planning to attend my third summer interning at Dell Technologies.
                    </p>
                    <br />
                    <p>
                        List of my interests:
                    </p>

                    <ListWithButton />
                    <br />

                </subtitle>
            </header>

        </div>
    );
}