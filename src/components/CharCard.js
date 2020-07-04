import React from 'react';
import './CharCard.css';
const CharCard = (props) => {
    const characterData = props.charData
    console.log(characterData)
    return (
        <div>
            {/* <button onMouseOver={changeBackground} onMouseOut={changeBackground2}>Hello</button> */}
            <div className="card">
                <div className="card-body">
                    <img src={characterData.img} className="card-img-top" style={{ width: '100%', height: '380px', objectFit: 'cover' }} alt="" />
                </div>
                <div className="text-center" style={{ fontSize: '15px' }}>
                    <p className="card-text">Name : {characterData.name}</p>
                    <p className="card-text">Role : {characterData.occupation}</p>
                </div>
            </div>
        </div>
    );
};

export default CharCard;