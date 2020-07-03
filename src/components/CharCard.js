import React from 'react';
import './CharCard.css';
const CharCard = (props) => {
    const characterData = props.charData
    // console.log(characterData)
    return (
        <div>
            {/* <button onMouseOver={changeBackground} onMouseOut={changeBackground2}>Hello</button> */}
            <div className="card">
                <div className="card-body">
                    <img src={characterData.img} className="card-img-top" style={{ width: '100%', height: '380px', objectFit: 'cover' }} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CharCard;