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
                <button className="button-1" onClick={reorderList}>Reorder List</button>
            </div>
        )
    }
    return (

        <div className="Home">

            <header className="Home-header">

                <p>
                    Welcome to my website!
                </p>
                
                <img src={SnorlaxSleep} className="Home-logo" />


                <subtitle className="Home-subtitle">
                    <br />
                    <p className="Home-subtitle">
                        My name is Cami Lacy, and I am a graduating senior from the University of Washington 
                        Bothell. 
                        <br></br>
                        <br></br>
                        I am majoring in Computer Science and Software Engineering while planning 
                        to attend my third summer interning at Dell Technologies.
                        <br></br>
                        <br></br>
                        List of my interests:
                        <ListWithButton />
                    </p>

                </subtitle>
            </header>

        </div>
    );
}