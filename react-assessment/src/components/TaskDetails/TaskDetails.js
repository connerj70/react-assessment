import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getTasks, updateTask, deleteTask, completeTask} from '../../ducks/reducer';

class TaskDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
           title: '',
           description: '',
           completed: null
        };
    }


    componentDidMount() {
        this.props.getTasks().then(() => {
            let specificTask = this.props.tasks[this.props.tasks.length - 1].filter(value => {
                if(value.id == this.props.match.params.id) {
                    return true;
                } else {
                    return false;
                }
            });
            this.setState({
                title: specificTask[0].title,
                description: specificTask[0].description,
                completed: specificTask[0].completed
            });
        });
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        }, () => console.log(this.state));
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleCompleteClick() {
        this.props.completeTask(this.props.match.params.id)
        this.props.history.push('/');
    }

    handleCancelClick() {
        this.props.getTasks().then(() => {
            let specificTask = this.props.tasks[this.props.tasks.length - 1].filter(value => {
                if(value.id == this.props.match.params.id) {
                    return true;
                } else {
                    return false;
                }
            });
            this.setState({
                title: specificTask[0].title,
                description: specificTask[0].description,
                completed: specificTask[0].completed
            });
        });
    }

    handleDeleteClick() {
        this.props.deleteTask(this.props.match.params.id)
        this.props.history.push('/');
    }

    handleSaveClick() {
        this.props.updateTask({title: this.state.title, description: this.state.description, completed: this.state.completed, id: this.props.match.params});
        this.props.history.push('/');
    }


    render() {
        return (
            <div>
                <Link to='/'>Back to Tasks</Link>
                <div>
                    <div>Task></div>
                    <input onChange={(e) => this.handleTitleChange(e)}value={this.state.title ? this.state.title : null} placeholder="task" type='text'/>
                    <button onClick={() => this.handleCompleteClick()}>Complete</button>
                </div>

                <div>
                    <div>Description</div>
                    <textarea onChange={(e) => this.handleDescriptionChange(e)}value={this.state.description ? this.state.description : null} placeholder="description"/>
                </div>

                <div>
                    <button onClick={() => this.handleSaveClick()}>Save</button>
                    <button onClick={() => this.handleCancelClick()}>Cancel</button>
                    <button onClick={() => this.handleDeleteClick()}>Delete</button>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, {getTasks, updateTask, deleteTask, completeTask})(TaskDetails);