import React, {Component} from 'react';
import axios from 'axios';
import './TaskDisplay.css';
import {Link} from 'react-router-dom';
import {getTasks, completeTask} from '../../ducks/reducer';
import {connect} from 'react-redux';

class TaskDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        this.props.getTasks()
    }

    handleCompleteClick(id) {
        this.props.completeTask(id)
    }
    
    render() {

        let toDisplay = 
            this.props.tasks[0] ? 
            
            this.props.tasks[this.props.tasks.length - 1].map((value, i) => {
            return (
                
                <div className={value.completed ? 'task-completed' : 'task-not-completed'}>
                <Link to={"/taskdetails/" + value.id } key={i}>
                    <div>{value.title}</div>
                    <div>{value.description}</div>
                    </Link>
                    <button onClick={() => this.handleCompleteClick(value.id)}>Complete</button>
                </div>
                
            )
        })
        :
        null;

        return (
            <div>
                Task Display
                {toDisplay}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, {getTasks, completeTask})(TaskDisplay);