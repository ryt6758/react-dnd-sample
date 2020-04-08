import React from 'react'
import { connect } from 'react-redux'
import { create } from '../actions'
import { makeStyles } from '@material-ui/core/styles'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


const useStyles = makeStyles(theme => {
  root: {
    margin: theme.spacing(2)
  }
})
class Input extends React.Component {

  getInputText() {
    const titleTargetDOM = document.getElementsByName('title')
    const bodyTargetDOM = document.getElementsByName('body')
    return {
      title: titleTargetDOM[0].value,
      body: bodyTargetDOM[0].value,
    }
  }

  render() {
    return (
      <div style={{
        margin: "10px 0 20px",
        textAlign: "center"
      }}>
        {/* <form noValidate autoComplete="off"> */}
        <TextField type="text" name="title" hintText="Title" fullWidth="true" floatingLabelText="Title" />
        <TextField type="text" name="body" hintText="Body" fullWidth="true" floatingLabelText="Body" />
        {/* </form> */}
        <RaisedButton label="Done" onClick={() => this.props.create(this.getInputText())}></RaisedButton>
        {/* <input type='text' name='title' placeholder='Please write Title..'></input>
        <input type='text' name='body' placeholder='Please write Body..'></input>
        <button onClick={() => this.props.create(this.getInputText())}>done</button> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  create: props => dispatch(create(props))
})

export default connect(null, mapDispatchToProps)(Input)
