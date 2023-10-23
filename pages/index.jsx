import { korean_consonants, korean_vowels } from "../files/scripts/korean_dict";
import { useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function Main() {
    function display_lists() {
        const lists = document.querySelector(".lists");
        const button = document.querySelector(".menu_button");

        if(window.getComputedStyle(lists).display == "none") {
            lists.classList.add("show");
            button.classList.add("color_white");
        }

        else {
            lists.classList.remove("show");
            button.classList.remove("color_white");
        }
    }

    return (
        <div id="main">
            <div className="menu_button" onClick={display_lists}></div>
            <Lists />
            <Minigame />
        </div>
    );
}


function Lists() {
    return (
        <div className="lists">
            <div id="consonants_block">
                <Hangul option = "Consonants" />
            </div>

            <div id="vowels_block">
                <Hangul option = "Vowels" />
            </div>
        </div>
    );
}


function Minigame() {
    let hangul_keys = [];
    hangul_keys = hangul_keys.concat(Object.keys(korean_consonants), Object.keys(korean_vowels));

    const consonants_keys = Object.keys(korean_consonants);
    
    // Symbol is the current key
    const [symbol, setSymbol] = useState();
    // Initializing symbol
    useEffect(() => {setSymbol(hangul_keys[dice(hangul_keys.length)])}, []);

    const [options, setOptions] = useState([0, 0, 0, 0]);

    function update_options() {
        const tmp_array = [];
        let tmp_symbol = [];

        for (let i = 0; i < 4; i++) {
            let tmp = hangul_keys[dice(hangul_keys.length)];
            consonants_keys.includes(tmp) ? tmp_symbol = korean_consonants[tmp]["initial"] + " " + korean_consonants[tmp]["final"] :
            tmp_symbol = korean_vowels[tmp];

            if (!tmp_array.includes(tmp_symbol)) {
                tmp_array.push(tmp_symbol);
            }
            
            else {
                i--;
            }
        }

        consonants_keys.includes(symbol) ? tmp_symbol = korean_consonants[symbol]["initial"] + " " + korean_consonants[symbol]["final"] :
        tmp_symbol = korean_vowels[symbol];

        if (!tmp_array.includes(tmp_symbol)) {
            tmp_array[dice(4)] = tmp_symbol;
        }

        setOptions(tmp_array);
    }

    // Calling update_options() after symbol is set
    useEffect(() => {update_options()}, [symbol]);

    const [sequence, setSequence] = useState(0);

    let select = 1;

    function update(e) {
        if (select) {
            select = 0;

            let current_value = 0;
            let reset_sequence = 0

            consonants_keys.includes(symbol) ? current_value = korean_consonants[symbol]["initial"] + " " + korean_consonants[symbol]["final"] : current_value = korean_vowels[symbol];

            current_value === e.currentTarget.innerText ? (e.currentTarget.style.backgroundColor = "#0f0", reset_sequence = 1) : (e.currentTarget.style.backgroundColor = "#f00", reset_sequence = 0);

            setTimeout(() => {
                reset_sequence ? setSequence(sequence + 1) : setSequence(0);
                select = 1;
                // It also updates options
                setSymbol(hangul_keys[dice(hangul_keys.length)]);
            }, 500);
        }    
    }

    return (
        <div id="minigame">

            <div id="symbol">
                {symbol}
                <div id="sequence">Sequence: {sequence}</div>
            </div>

            <div id="answer">
                {options.map((option) => <div key={uuidv4()} onClick={(e) => update(e)} className="answer"> {option} </div>)}
            </div>
        </div>
    );
}


function dice(value) {
    return Math.floor(Math.random() * value);
}


function Hangul(option) {
    // Storing consonants
    const consonants = []
    const [consonants_show, set_consonants_show] = useState(false);

    for (const [key, value] of Object.entries(korean_consonants)) {
        consonants.push(key);
        consonants.push(value["initial"]);
        consonants.push(value["final"]);   
    }

    // Storing vowels
    const vowels= []
    const [vowels_show, set_vowels_show] = useState(false);

    for (const [key, value] of Object.entries(korean_vowels)) {
        vowels.push(key);
        vowels.push(value);  
    }
    
    if (option["option"] == "Consonants") {
        return(
            <>
                <div className="list_wrapper" onClick={() => {consonants_show ? set_consonants_show(false) : set_consonants_show(true)}}>{option["option"]}</div>

                {
                    consonants_show &&
                    <>
                        <div id="consonants">
                            {consonants.map((consonant) => <div id="consonants_array" key={uuidv4()}>{consonant}</div>)}
                        </div>
                    </>
                }
            </>
        );
    }

    else {
        return(
            <>
                <div className="list_wrapper" onClick={() => {vowels_show ? set_vowels_show(false) : set_vowels_show(true)}}>{option["option"]}</div>

                {
                    vowels_show &&
                    <>
                        <div id="vowels">
                            {vowels.map((vowel) => <div id="vowels_array" key={uuidv4()}>{vowel}</div>)}
                        </div>
                    </>
                }
            </>
        );
    }
}