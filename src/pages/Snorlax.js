import { useState } from "react";
import sleepy_snorlax from '../images/sleepy_snorlax.gif'
import snorlax_travel from '../images/snorlax_travel.gif'
import snorlax_battle from '../images/snorlax_battle.gif'

/*
Make the page about something you’re interested in (any topic)
Use headings
Text
At least 3 images
Think about what elements on the page you want to catch people’s attention first, second, and third
*/

export default function Snorlax() {

    function ListWithButton() {
        // state to hold my list
        const [list, setList] = useState(['Catch rate: 7.7%', 'Height: 6 feet 11 inches', 'Weight: 1014.1 lbs',
            'Habitat: mountains and forrests', 'Nutrition: 900 lbs food daily',
            'Korean translation: 잠만보 or \"just taking a nap\"']);

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

    function ListWithButton2() {
        // state to hold my list
        const [list, setList] = useState(['Snorlax was later hypnotized into a sleep state by Jigglypuff which allowed Ash to capture him in a pokeball',
            'Ash was able to use Snorlax for future battles, but the pokeball broke',
            'Together, the team had to set Snorlax into a deep sleep again and find ways to carry him to the nearest Pokecenter']);

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

    function ListWithButton3() {
        // state to hold my list
        const [list, setList] = useState(['Victories: Rhydon, Meowth, Steelix, Hariyama, Feraligatr, Nidoqueen, Medicham',
        'Losses: Gyrados, Scizor, Houndoom']);

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
        <div className='container'>
            <header className="Snorlax-header">
                <br></br>
                <p>Snorlax Basic Info</p>
                <subtitle className="Snorlax-text-subtitle">
                    <p>According to Snorlax's description in the Pokedex, they are a normal type pokemon
                        that evolve from their earlier iteration as Munchlax. Snorlax's typical day consists
                        of nothing more than eating and sleeping. It is such a docial Pokemon that there are
                        children  who use its expansive belly as a place to play.
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <subtitle className="Snorlax-button-style">
                                <ListWithButton />
                            </subtitle>
                            <img src={sleepy_snorlax} className="Snorlax-logo" />
                        </div>


                    </p>


                    {/* <img src={sleepy_snorlax} className="Snorlax-logo" /> */}
                </subtitle>
            </header>

            <header className="Snorlax-header">
                <br></br>
                <p>Snorlax Origins</p>
                <subtitle className="Snorlax-text-subtitle">
                    <p> Snorlax was first introduced through the Pokemon tv show after his problematic eating
                        tendencies that would leave islands without their fruit production since Snorlax would
                        eat everything. The protagonist Ash attempted to intervene, but Snorlax got away after
                        performing the body slam maneuver in the battle. 
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <subtitle className="Snorlax-button-style">
                                <ListWithButton2 />
                            </subtitle>
                            <img src={snorlax_travel} className="Snorlax-logo" />
                        </div>


                    </p>


                    {/* <img src={sleepy_snorlax} className="Snorlax-logo" /> */}
                </subtitle>




            </header>

            <header className="Snorlax-header">
                <br></br>
                <p>Snorlax Battles</p>
                <subtitle className="Snorlax-text-subtitle">
                    <p>Snorlax has encounter numerous battles and employed a variety of maneuvers including
                        body slam, yawn, snore, razor claw, hyperbeam, dodge, headbutt, earthquake, and many more. 
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <subtitle className="Snorlax-button-style">
                                <ListWithButton3 />
                            </subtitle>
                            <img src={snorlax_battle} className="Snorlax-logo" />
                        </div>


                    </p>


                    {/* <img src={sleepy_snorlax} className="Snorlax-logo" /> */}
                </subtitle>
            </header>
        </div>

    );
}