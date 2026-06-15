import React from 'react'

function Card() {
    return (
        <div className='card-Container'>
            <div className='snack-Img'>
                <img src="https://imgs.search.brave.com/tIh6LKn39DWqqVXbu_q3T2b5JCEiQ_ALflftUm8NKTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/OTgzNzMxODIzMDgt/MzI3MDQ5NWQyZjU4/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1ueDhiRzloWmlV/eU1HOW1KVEl3WW5K/bFlXUjhaVzU4TUh4/OE1IeDhmREE9"></img>
            </div>
            <div className='card-Info'>
                <div className='snack-Heading'>
                    Whole Weat Loaf
                </div>
                <div className='snack-Description'>
                    Nutritious, fibre-rich and wholesome loaves.
                </div>
                <div className='snack-Price'>
                    $4.50
                </div>
            </div>
            <div className='left-Section'>
                <div className='stock-Value'>
                    <div className='stock'>
                    In-Stock: 40
                    </div>
                </div>
                <div className='trash-Bin'>
                    <img src="https://imgs.search.brave.com/Qu6bagfmxT5KkQ06wXnkh9JFSJKPKuyVx8224Vg3__4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC91c2VyLWlu/dGVyZmFjZS90cmFz/aC1jYW4td2hpdGUt/aWNvbi5wbmc"></img>
                </div>
            </div>
        </div>
    )
}

export default Card
