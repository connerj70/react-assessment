import axios from 'axios';


let initialState = {
    tasks: []
};


const ADD_TASK = "ADD_TASK";
const GET_TASKS = "GET_TASKS";
const UPDATE_TASK = "UPDATE_TASK";
const DELETE_TASK = "DELETE_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";

export function getTasks() {
    let tasks = axios.get('https://practiceapi.devmountain.com/api/tasks').then((resp) => {
        return resp.data
    });

    return {
        type: GET_TASKS,
        payload: tasks
    };
}

export function completeTask(id) {
    let tasks = axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(resp => {
        return resp.data
    });

    return {
        type: COMPLETE_TASK,
        payload: tasks
    }
}

export function updateTask(task) {
    console.log(task)
    let tasks = axios.patch(`https://practiceapi.devmountain.com/api/tasks/${task.id.id}`, {title: task.title, description: task.description, completed: task.completed}).then(resp => {
        return resp.data
    });

    return {
        type: UPDATE_TASK,
        payload: tasks
    };
}

export function deleteTask(id) {
    let tasks = axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(resp => {
        return resp.data
    })

    return {
        type: DELETE_TASK,
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

    case UPDATE_TASK + '_FULFILLED':
        return Object.assign({}, state, {tasks: [...state.tasks, action.payload]});

    case DELETE_TASK + '_FULFILLED':
        return Object.assign({}, state, {tasks: [...state.tasks, action.payload]});

    case COMPLETE_TASK + "_FULFILLED":
        return Object.assign({}, state, {tasks: [...state.tasks, action.payload]});

    default:
        return state;
    }
};