import axios from 'axios';


let initialState = {
    tasks: []
};


const ADD_TASK = "ADD_TASK";
const GET_TASKS = "GET_TASKS";

export function getTasks() {
    let tasks = axios.get('https://practiceapi.devmountain.com/api/tasks').then((resp) => {
        return resp.data
    });

    return {
        type: GET_TASKS,
        payload: tasks
    };
}

export function addTask(newTask) {
    
    let newTasksArray = axios.post('https://practiceapi.devmountain.com/api/tasks', {title: newTask.title, description: newTask.description}).then((resp) => {
        return resp.data
    });

    return {
        type: ADD_TASK,
        payload: newTasksArray
    };
}

export default function reducer(state=initialState, action) {
    switch(action.type) {

    case ADD_TASK + "_FULFILLED":
        return Object.assign({}, state, {tasks: [...state.tasks, action.payload]});

    case GET_TASKS + "_FULFILLED":
        return Object.assign({}, state, {tasks: [...state.tasks, action.payload]});

    default:
        return state;
    }
}