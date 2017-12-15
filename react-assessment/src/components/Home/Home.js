import React, {Component} from 'react';
import TaskDisplay from '../TaskDisplay/TaskDisplay';
import AddTask from '../AddTask/AddTask';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
                <AddTask />
                <TaskDisplay />
            </div>
        )
    }
}

export default Home;