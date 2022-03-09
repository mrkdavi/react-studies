import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


// App pode tanto ser feito como função ou como classe
class App extends Component {
  constructor(props) {
    super(props);
    // o método handlePClick precisar dessa bind para usar o this
    this.handlePClick = this.handlePClick.bind(this);

    this.state = {
      name: 'Pato Donald',
      counter: 0,
    }
  }

  // Todo o construtor acima pode ser resumido da seguinte forma:
  /*
  state = {
      name: 'Pato Donald',
      counter: 0,
    }
  */
  // Isso ocorre funciona graças ao class fields
  //OBS: Com o class fields não precisamos fazer o bind dos métodos

  handlePClick() {
    console.log('clicked!');
    this.setState({ name: 'Mickey' });
  }

  // Quando usamos arrow function não precisamos bindar para usar o this
  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1})
  }

  render() {
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Add more one
          </a>
        </header>
      </div>
    )
  };
}

export default App;
