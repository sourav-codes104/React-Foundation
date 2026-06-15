import React from 'react'

function Card(props) {
    console.log(props);
    return (
        
        <div className='card-Container'>
            <div className='snack-Img'>
                <img src={props.img}></img>
            </div>
            <div className='card-Info'>
                <div className='snack-Heading'>
                    {props.name}
                </div>
                <div className='snack-Description'>
                    {props.desc}
                </div>
                <div className='snack-Price'>
                    ${props.price}
                </div>
            </div>
            <div className='left-Section'>
                <div className='stock-Value'>
                    <div className='stock'>
                    In Stock: {props.stock}
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
