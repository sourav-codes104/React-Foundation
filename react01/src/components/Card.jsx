import React from 'react'


function Card(props) {
    return (
        <div>
            <div className='card'>
                <div className='profilePic'>
                    <img src={props.img}></img>
                </div>
                <div className='userInfo'>
                    <div className='userName'>
                        {props.name}
                    </div>
                    <div className='userAge'>
                        {props.age}
                    </div>
                    <div className='aboutUser'>
                        Hy I am a frontend developer currently working in Google.
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Card
