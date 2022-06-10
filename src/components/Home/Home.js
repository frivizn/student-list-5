import React, { useState } from 'react'
import initialStudentList from '../../initialStudentList'

import Card from '../UI/Card'
import NewStudent from '../NewStudent/NewStudent'
import Header from '../Students/Header'
import Students from '../Students/Students'
import classes from './Home.module.css'

const Home = (props) => {
  const [students, setStudents] = useState(initialStudentList)

  const deleteStudentHandler = (id) => {
    setStudents((prevList) => {
      const updatedList = prevList.filter((student) => student.id !== id)
      return updatedList
    })
  }

  let content = ''

  if (students.length === 0) {
    content = (
      <>
        <h2>List of Students</h2>
        <Header />
        <h3 className={classes['students-list__fallback']}>
          Found no students.Add a student?
        </h3>
      </>
    )
  }

  if (students.length > 0) {
    content = <Students students={students} onDelete={deleteStudentHandler} />
  }

  const addStudentHandler = (student) => {
    setStudents((prevStudents) => {
      return [...prevStudents, student]
    })
  }

  return (
    <Card className={classes.wrapper}>
      <NewStudent onAddStudent={addStudentHandler} />
      {content}
    </Card>
  )
}

export default Home
