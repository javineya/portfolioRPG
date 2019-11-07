import React from 'react';

const Quest = (props) => (
    <div className="wrapper quest">
        
        <div className="quest__tickbox">
            <label className="container">
                <span className="quest__container" onClick={(event) => props.onClick(event, props)}>
                    <div className="quest__details">
                        <div className="quest__key-info"><span>{props.name}</span><span>{props.completedAt}</span></div>
                        <div className="quest__description">{props.note}</div>
                    </div>
                </span>
            </label>
        </div>
    </div>
);

export default Quest;