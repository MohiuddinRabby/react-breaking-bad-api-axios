import React from 'react';
import CharCard from './CharCard';
import spin from '../img/spin.gif';
const Character = (props) => {
    const loading = props.isLoading
    const data = props.data

    return (
        <div className="container-fluid">
            <div className="row">
                {
                    loading ? <div className="text-center"><img src={spin} className="w-100" alt="" /></div> :
                        data.map(item => <div className="col-md-4 py-2">
                            <CharCard key={item.char_id} charData={item}></CharCard>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Character;