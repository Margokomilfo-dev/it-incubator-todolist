import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./Todolist.module.css";
import {TextField} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";

type AddFormPropsType = {
    addNewItem: (inputValue: string) => void
}
export function AddForm(props: AddFormPropsType){
    //data
    let [inputValue, setInputValue] = useState<string>('')
    let [error, setError] = useState<string | null>('')

//-----------add task------------
    let addTask = (inputValue: string) => {
        if (inputValue.trim()) {
            props.addNewItem(inputValue)
            setInputValue('')
        } else {
            setError('field is required')
        }
    }
    let addTasks = () => {
        addTask(inputValue)
    }

//-------------input-------------
    let onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        inputValue.trim() && setError(null)
        setInputValue(e.currentTarget.value)

    }
    let addInputText = (e: KeyboardEvent<HTMLInputElement>) => {

        setError(null)
        if (inputValue.trim() && e.key === 'Enter') {
            props.addNewItem(inputValue)
            setInputValue('')
        }
    }

    return(
        <div className={s.taskInput}>
            <TextField id="outlined-error-helper-text"
                       label={error ? "error" : "new task"}
                       variant="outlined"
                       color={'secondary'}
                       value={inputValue}
                       onChange={onInputChange}
                       onKeyPress={addInputText}
                //className={error ? s.arrayInputAddTasks : ''}//
                       error={Boolean(error)}

            />
            <IconButton  onClick={addTasks}>
                <AddCircleOutlineTwoToneIcon color={"primary"} style={{padding: '0px'}}/>
            </IconButton >
            {error ? <div className={s.error}> {error} </div> : null}
        </div>
    )
}