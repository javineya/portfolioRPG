import React from 'react';
import { connect } from 'react-redux';

import Quest from './Quest';

class QuestHistory extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            quests: props.quests
        }

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick = (event, props) => {
        // add class to event.target for styling
        event.target.classList.add('completed');
        // declare variables for targeting & file location
        let newImage = props.newImage;
        let imageTarget = props.target;
        // TODO: make image files more descriptive, drop questIndex from state
        let tileImage = `${props.tileImage}${props.questIndex}.png`;
        let tileTarget = `tile${props.questIndex}`;
        
        // copy this.state.quests into array for .map()
        var quests = [...this.state.quests];

        quests.map((quest) => {
            if ( quest.name === props.name) {

                // change paper doll image
                const upgrade = document.getElementById(imageTarget);
                const tileUpgrade = document.getElementById(tileTarget);
                upgrade.style.backgroundImage=`url(${newImage})`;
                // change tile image
                tileUpgrade.classList.add('filled');
                tileUpgrade.style.backgroundImage=`url(${tileImage})`;

            } 

            return quest;
        })
        // object destructuring to update this.state.quests
        this.setState({ quests });
    }

    render () {
        return (
            <div className="wrapper quest-history">
                <h2>Quest History</h2>
                {this.state.quests.map((quest, i) => 
                    <Quest 
                        key={i}
                        questIndex={i}
                        name={quest.name}
                        note={quest.note}
                        completedAt={quest.completedAt}
                        checked={quest.checked}
                        newImage={quest.newImage}
                        defaultImage={quest.defaultImage}
                        target={quest.target}
                        tileImage={quest.tileImage}
                        onClick={this.handleClick}
                    />)}
            </div>
        )
    }
};

const mapStateToProps = state => ({ quests: state.quests });


export default connect(mapStateToProps)(QuestHistory);