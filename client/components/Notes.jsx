import React from 'react'
import ReactDOM from 'react-dom'
import Draggable, {DraggableCore} from 'react-draggable'

import Note from './Note-helper'

export default React.createClass({
      getInitialState() {
            return {
                notes: [
                  {id: 100, note: 'Find Abel Tasman side tracks'},
                  {id: 112, note: 'Find waterfalls near Napier'},
                  {id: 111, note: 'Fix hiking poles'}
                ]
            }
        },

        nextId() {
          this.uniqueId = this.uniqueId || 0
          return this.uniqueId++
        },

        add(text) {
          var notes = [
            ...this.state.notes,
            {
              id: this.nextId(),
              note: text
            }
          ]
          this.setState({notes})
        },

        update(newText, id) {
            var notes = this.state.notes.map(
                note => (note.id !== id) ?
                   note :
                    {
                        id: id++,
                        note: newText
                    }
                )
            this.setState({notes})
        },

        remove(id) {
            var notes = this.state.notes.filter(note => note.id !== id)
            this.setState({notes})
        },

        eachNote(note) {
            return (<Note key={note.id}
                          id={note.id}
                          onChange={this.update}
                          onRemove={this.remove}>
                      {note.note}
                    </Note>)
        },

        render() {
            return (<div className='board'>
                       {this.state.notes.map(this.eachNote)}
                       <button className= 'note-btn' onClick={() => this.add()}>+</button>
                    </div>)
        }
})
