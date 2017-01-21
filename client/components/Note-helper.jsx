import React from 'react'

export default React.createClass({
            getInitialState() {
                return {editing: false}
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
                      <textarea ref="newText"></textarea>
                      <button onClick={this.save}>SAVE</button>
                    </div>
                )
            },
            renderDisplay() {
                return (
                    <div className="note">
                        <p>{this.props.children}</p>
                        <span>
                          <button onClick={this.edit}>EDIT</button>
                          <button onClick={this.remove}>X</button>
                        </span>
                    </div>
                    )
            },
            render() {
              return (this.state.editing) ? this.renderForm()
                                          : this.renderDisplay()

            }
        })
