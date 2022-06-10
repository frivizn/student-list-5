import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Button from './Button'

import classes from './ErrorModal.module.css'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCancel} />
}

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        {props.title === 'Warning!' && (
          <Button onClick={props.onCancel}>Cancel</Button>
        )}
        <Button onClick={props.onConfirm}>Ok</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCancel={props.onCancel} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onCancel={props.onCancel}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  )
}

export default ErrorModal
