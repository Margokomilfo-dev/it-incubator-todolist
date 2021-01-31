import React from 'react'
import {Provider} from 'react-redux'
import {combineReducers} from 'redux'
import {v1} from 'uuid'
import {tasksReducer} from '../features/TodolistsList/tasksReducer'
import {todolistReducer} from '../features/TodolistsList/todolistsReducer'
import {AppRootStateType} from '../app/store'
import {TaskPriorities, TaskStatuses} from '../api/api'
import {appReducer} from '../app/appReducer'
import {authReducer} from '../features/Login/authReducer'
import {HashRouter} from 'react-router-dom'
import {configureStore} from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistReducer,
    app: appReducer,
    auth: authReducer
})

const initialGlobalState: AppRootStateType = {
    todolists: [
        {id: 'todolistId1', title: 'What I want to learn', filter: 'all', addedDate: '', order: 1, entityStatus: 'idle'},
        {id: 'todolistId2', title: 'React', filter: 'all', addedDate: '', order: 2, entityStatus: 'loading'},
    ],
    tasks: {
        ['todolistId1']: [
            {
                id: v1(),
                status: TaskStatuses.Completed,
                title: 'HTML/CSS',
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                todoListId: 'todolistID1'
            },
            {
                id: v1(),
                status: TaskStatuses.New,
                title: 'React',
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                todoListId: 'todolistID1'
            },
            {
                id: v1(),
                status: TaskStatuses.Completed,
                title: 'JS',
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                todoListId: 'todolistID1'
            },
            {
                id: v1(),
                status: TaskStatuses.Completed,
                title: 'tasks from Ignat',
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                todoListId: 'todolistID1'
            },
            {
                id: v1(),
                status: TaskStatuses.Completed,
                title: 'Social Network',
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                todoListId: 'todolistID1'
            },
            {
                id: v1(),
                status: TaskStatuses.New,
                title: 'CodeWars',
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                todoListId: 'todolistID1'
            },
            {
                id: v1(),
                status: TaskStatuses.New,
                title: 'Native JS',
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                todoListId: 'todolistID1'
            },
            {
                id: v1(),
                status: TaskStatuses.New,
                title: 'React/TypeScript',
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                todoListId: 'todolistID1'
            }
        ],
        ['todolistId2']: [
            {
                id: v1(),
                status: TaskStatuses.Completed,
                title: 'Путь самурая',
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                todoListId: 'todolistID2'
            },
            {
                id: v1(),
                status: TaskStatuses.New,
                title: 'Реакт- кабзда как просто',
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                todoListId: 'todolistID2'
            },
            {
                id: v1(),
                status: TaskStatuses.New,
                title: 'SocialNetwork',
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                todoListId: 'todolistID2'
            },
            {
                id: v1(),
                status: TaskStatuses.Completed,
                title: 'Tasks from Ignat',
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                todoListId: 'todolistID2'
            },
            {
                id: v1(),
                status: TaskStatuses.New,
                title: 'documentation',
                addedDate: '',
                deadline: '',
                description: '',
                order: 0,
                priority: TaskPriorities.Low,
                startDate: '',
                todoListId: 'todolistID2'
            }
        ]
    },
    app: {
        status: 'succeeded',
        error: null,
        isInitialized: true
    },
    auth: {
        isLoggedIn: true
    }
}

export  const storyBookStore = configureStore({
    reducer: rootReducer,
    preloadedState: initialGlobalState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})
export const ReduxStoreProviderDecorator = (StoryFn: React.FC) => {
    return (
        <Provider store={storyBookStore}>
            <HashRouter>
                <StoryFn/>
            </HashRouter>
        </Provider>
    )
}