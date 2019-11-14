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
        let tileImages = props.tileImages;
        let tileTargets = props.tileTargets;
        
        // copy this.state.quests into array for .map()
        var quests = [...this.state.quests];

        quests.map((quest) => {
            if ( quest.name === props.name) {

                // change paper doll image
                const upgrade = document.getElementById(imageTarget);upgrade.style.backgroundImage=`url(${newImage})`;
                if (tileTargets) {
                    tileTargets.map((target, i) => {
                        let tileUpgrade = document.getElementById(target);
                        tileUpgrade.classList.add('filled');
                        return tileUpgrade.style.backgroundImage=`url(${tileImages[i]}.png)`;
                    })
                }
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
                        name={quest.name}
                        note={quest.note}
                        completedAt={quest.completedAt}
                        checked={quest.checked}
                        newImage={quest.newImage}
                        defaultImage={quest.defaultImage}
                        target={quest.target}
                        tileImages={quest.tileImages}
                        tileTargets={quest.tileTargets}
                        onClick={this.handleClick}
                    />)}
                <h3>The Quest continues...</h3>
            </div>
        )
    }
};

const mapStateToProps = state => ({ quests: state.quests });


export default connect(mapStateToProps)(QuestHistory);