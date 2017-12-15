import React, {Component} from 'react';
import "./AddTask.css";
import {connect} from 'react-redux';
import {addTask} from '../../ducks/reducer';

class AddTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: ''
        }
    }


    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        }, () => console.log(this.state));
    }

    addTask() {
        this.props.addTask(this.state);
    }

    render() {
        return (
            <div className="add-task">
                TO-DO:
                <input onChange={(e) => this.handleTitleChange(e)} placeholder="title" type="text" name="task"/>
                <textarea onChange={(e) => this.handleDescriptionChange(e)}placeholder="description" row="4" cols="50" />
                <button onClick={() => this.addTask()}>Create TO-DO</button>
            </div>
        )
    }
}

export default connect(null, {addTask})(AddTask);