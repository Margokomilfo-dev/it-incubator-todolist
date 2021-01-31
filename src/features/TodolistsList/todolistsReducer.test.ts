import {v1} from "uuid"
import {
    addTodolistAC, removeTodolistAC, todolistReducer,
    changeTodolistTitleAC, changeTodolistFilterValueAC, TodolistDomainType, setTodolistsAC, changeTodolistEntityStatus
} from './todolistsReducer'

let todolists: Array<TodolistDomainType>;
let todolistID1: string
let todolistID2: string

beforeEach(() => {
    todolistID1 = v1()
    todolistID2 = v1()
    todolists = [
        {id: todolistID1, title: 'What I want to learn', filter: 'all', addedDate: '', order: 1, entityStatus: 'idle' },
        {id: todolistID2, title: 'React', filter: 'all', addedDate: '', order: 2, entityStatus: 'idle'},
    ]
});

test('Add new todolist',()=> {
    //data
    const newTitle = 'What to buy'
    //action
    const endState = todolistReducer(todolists, addTodolistAC({todolist: {id: 'todolist1', addedDate: '', order: 0, title: newTitle}}))

    //expect result
    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe('React')
    expect(endState[0].title).toBe('What to buy')
})

test('Remove todolist',()=> {
    //data
    const todolistId = todolistID1
    //action
    const endState = todolistReducer(todolists, removeTodolistAC({id: todolistId}))
    //expect result
    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistID2)
})

test('Change title of todolist',()=> {
    //data
    const newTitle = 'new Title'
    //action
    const endState = todolistReducer(todolists, changeTodolistTitleAC({id: todolistID2, newTitle: newTitle}))

    //expect result
    expect(endState[1].title).toBe('new Title')
})

test('Change filter of todolist',()=> {
    //data
    const newFilterValue = 'active'
    //action
    const endState = todolistReducer(todolists, changeTodolistFilterValueAC({id: todolistID2, newFilterValue: newFilterValue}))

    //expect result
    expect(endState[1].filter).toBe('active')
})
test('Change entityStatus of todolist',()=> {

    const endState = todolistReducer(todolists, changeTodolistEntityStatus({id: todolistID2, status: 'loading'}))

    //expect result
    expect(endState[1].entityStatus).toBe('loading')
})
test('Todolist should be set',()=> {

    const endState = todolistReducer([], setTodolistsAC({todolists: todolists}))
    //expect result
    expect(endState.length).toBe(2)
})
