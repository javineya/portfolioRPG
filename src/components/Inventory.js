import React from 'react';
import { connect } from 'react-redux';

import Tile from './Tile';

class Inventory extends React.Component {    
    constructor (props) {
        super(props);
        this.state = {
            skillInfo: props.quests.map( quest => (quest.skillInfo))
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event, props) => {
        /*
            TAKES:      event, props from Redux store
            RETURNS:    nothing
            PURPOSE:    if tile has an icon...
                        ...update skill window when tile clicked
        */

        const target =  document.getElementById('moreSkillInfo');

        if ( event.target.classList.contains('filled') ) {
            // update the skills window to give more information on clicked tile
            let skillInfo = props.skillInfo;

            // create new <p> element with skillInfo text inside
            let node = document.createElement('P');
            let textNode = document.createTextNode(skillInfo);
            node.appendChild(textNode);
            node.className = 'skills-window__p';

            // clear text and add newly-created element to DOM
            target.innerHTML = '';
            target.appendChild(node);
            
        } else {
            // create and show error message
            let node = document.createElement('P');
            let textNode = document.createTextNode('Keep questing to gain more skills.');
            node.appendChild(textNode);
            node.className = 'skills-window__p';
            target.innerHTML = '';
            target.appendChild(node);

        }
    }

    render () {
        return (
            // add some flag for tileImage presence for testing
            <div className="wrapper inventory">
            {
                [...Array(25)].map((e, i) =>
                    <Tile
                        key={i}
                        id={`tile${i}`}
                        skillInfo={this.state.skillInfo[i]}
                        onClick={this.handleClick}
                    />
                )
            }
            </div>
        )
    }
};

// TODO: find a way to pull 'skillInfo' out of the store state and put it into an array for indexing.
const mapStateToProps = state => ({ quests: state.quests });

export default connect(mapStateToProps)(Inventory);