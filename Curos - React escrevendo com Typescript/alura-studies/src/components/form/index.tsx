import React from 'react'
import Button from '../button'
import style from './form.module.scss'

export default class Form extends React.Component {
  state = {
    tarefa: '',
    tempo: '00:00:00',
  }

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    console.log('state: ', this.state)
  }
  render() {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(event) => {
              this.setState({ ...this.state, tarefa: event.target.value })
            }}
            id="tarefa"
            placeholder="o que deseja estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            name="tempo"
            step="1"
            value={this.state.tempo}
            onChange={(event) => {
              this.setState({ ...this.state, tempo: event.target.value })
            }}
            id="tempo"
            min="00:00:00"
            required
          />
        </div>
        <Button tipo="submit" descricao="Adicionar" />
      </form>
    )
  }
}
