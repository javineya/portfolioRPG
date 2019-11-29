import React from 'react';

import { skillData } from '../common/app-data';

const SkillsWindow = (props) => (
    <div className="wrapper skills-window">
        <div id='moreSkillInfo'>
            <h3>{ skillData.default.title }</h3>
            { 
                skillData.default.info.map(( para, i ) => ( 
                    <p className='skills-window__p' key={i}>{ para }</p> )) 
            }
        </div>
    </div>
);

export default SkillsWindow;