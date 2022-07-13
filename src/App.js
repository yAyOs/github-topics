import { ApolloProvider } from '@apollo/client';
import { CLIENT } from './config';

import logo from './images/github.png';
import Home from './components/home'

import './App.css';

const App = () => (
    <ApolloProvider client={CLIENT}>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo-github" alt="logo" />
        <p> GitHub Topics </p>
      </header>
      <div className="sectionTitle">  Browse popular topics on GitHub.  </div>
      <Home />
      <footer>
       Aspiration@Task | Jair.Quintero
      </footer>
    </div>
    </ApolloProvider>
  )

export default App;
