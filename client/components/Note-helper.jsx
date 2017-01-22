import React from 'react'
import ReactDOM from 'react-dom'
import Draggable, {DraggableCore} from 'react-draggable'

export default React.createClass({
            getInitialState() {
                return {editing: false}
            },

            componentdidUpdate () {
              if (this.state.editing) {
                this.refs.newText.focus()
                this.refs.newText.select()
              }
            },

            edit() {
                this.setState({editing: true})
            },
            save() {
                this.props.onChange(this.refs.newText.value, this.props.id)
                this.setState({editing: false})
            },
            remove() {
                this.props.onRemove(this.props.id)
            },
            renderForm() {
                return (
                    <div className="note">
                      <textarea ref="newText"
                        defaultValue={this.props.children}></textarea>
                      <button onClick={this.save} className= 'note-btn'>&#10004;</button>
                    </div>
                )
            },
            renderDisplay() {
                return (
                    <div className="note">
                        <p>{this.props.children}</p>
                        <span>
                          <button onClick={this.edit} className= 'note-btn'>Edit</button>
                          <button onClick={this.remove} className= 'note-btn'>X</button>
                        </span>
                    </div>
                    )
            },
            render() {
              return ( <Draggable>
                {(this.state.editing) ? this.renderForm()
                                            : this.renderDisplay()}
                        </Draggable>
                     )

            }
        })
