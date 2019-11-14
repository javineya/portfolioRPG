import React from 'react';

import QuestHistory from './QuestHistory';
import Inventory from './Inventory';

const Placard = () => (
    <div className="wrapper placard">
        Johnny Vineyard II
    </div>
);

const PaperDoll = () => (
    <div className="wrapper paper-doll">
        <div className='body wrapper' >
            {/* <img id='paper-doll-base' src='./images/PaperDoll.png' alt='' /> */}
            <div className='body head' id='pdHead' style={{backgroundImage: "url(images/pdDefaultHead.png)"}}></div>
            <div className='body torso' id='pdTorso' style={{backgroundImage: "url(images/pdDefaultTorso.png)"}}></div>
            <div className='body lower'>
                <div className='body hands' id='pdRHand' style={{backgroundImage: "url(images/pdDefaultRHand.png)"}}></div>
                <div className='body legs' id='pdLegs' style={{backgroundImage: "url(images/pdDefaultLegs.png)"}}></div>
                <div className='body hands' id='pdLHand' style={{backgroundImage: "url(images/pdDefaultLHand.png)"}}></div>
            </div>
            <div className='body feet' id='pdFeet' style={{backgroundImage: "url(images/pdDefaultFeet.png)"}}></div>
        </div>
    </div>
);

const SkillsWindow = (props) => (
    <div className="wrapper skills-window">
        <div id='moreSkillInfo'>
            <p className='skills-window__p' id='moreSkillInfo'>Click an item above to see more information.</p>
        </div>
    </div>
);

const App = () => (
    <div className="wrapper app">
        <div className="wrapper pane"><QuestHistory /></div>
        <div className="wrapper pane"><Placard /><PaperDoll /></div>
        <div className="wrapper pane"><Inventory /><SkillsWindow /></div>
    </div>
);

export default App;