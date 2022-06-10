import React, { useState, useRef } from 'react'
import ErrorModal from '../UI/ErrorModal'
import Button from '../UI/Button'

import classes from './StudentForm.module.css'

const StudentForm = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()
  const dateInputRef = useRef()
  const scoreInputRef = useRef()

  const [isValid, setIsValid] = useState(true)
  const [error, setError] = useState()

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value
    const enteredDate = dateInputRef.current.value
    const enteredScore = scoreInputRef.current.value

    if (enteredName.trim().length === 0) {
      setIsValid(false)
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name.',
      })
      return
    }

    if (+enteredAge.trim().length === 0) {
      setIsValid(false)
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age.',
      })
      return
    }

    if (enteredDate.trim().length === 0) {
      setIsValid(false)
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid date.',
      })
      return
    }

    if (+enteredScore.trim().length === 0) {
      setIsValid(false)
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid score (> 0).',
      })
      return
    }

    const studentData = {
      studentName: enteredName,
      age: enteredAge,
      date: new Date(enteredDate),
      score: +enteredScore,
    }

    props.onSaveStudentData(studentData)
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
    dateInputRef.current.value = ''
    scoreInputRef.current.value = ''
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
          onCancel={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className={classes['new-student__controls']}>
          <div
            className={`${classes['new-student__control']} ${
              !isValid && classes.invalid
            }`}
          >
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' ref={nameInputRef} />
          </div>
          <div
            className={`${classes['new-student__control']} ${
              !isValid && classes.invalid
            }`}
          >
            <label htmlFor='age'>Age</label>
            <input id='age' type='number' ref={ageInputRef} />
          </div>
          <div
            className={`${classes['new-student__control']} ${
              !isValid && classes.invalid
            }`}
          >
            <label htmlFor='date'>Date</label>
            <input
              id='date'
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              ref={dateInputRef}
            />
          </div>
          <div
            className={`${classes['new-student__control']} ${
              !isValid && classes.invalid
            }`}
          >
            <label htmlFor='score'>Score</label>
            <input
              id='score'
              type='number'
              min='0.00'
              step='0.10'
              ref={scoreInputRef}
            />
          </div>
        </div>
        <div className={classes['new-student__actions']}>
          <Button type='button' onClick={props.onCancel}>
            Cancel
          </Button>
          <Button type='submit'>Add Student</Button>
        </div>
      </form>
    </>
  )
}

export default StudentForm
