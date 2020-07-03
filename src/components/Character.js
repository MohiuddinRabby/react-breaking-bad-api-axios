import React from 'react';
import CharCard from './CharCard';

const Character = (props) => {
    const loading = props.isLoading
    const data = props.data

    return (
        <div className="container-fluid">
            <div className="row">
                {
                    loading ? <div><h1 className="bg-dark text-primary text-center">Loading.....</h1></div> :
                        data.map(item => <div className="col-md-4 py-2">
                            <CharCard key={item.char_id} charData={item}></CharCard>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Character;