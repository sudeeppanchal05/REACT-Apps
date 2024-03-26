import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
          <h1>REACT FIRST APP</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
                  <code><table>
                      <tr>
                          <td>
                             new react app
                          </td>
                      </tr>
                  </table></code> 
        </p>
        <a
          className="App-link"
                  href="https://www.google.co.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find google
        </a>
      </header>
    </div>
  );
}

export default App;
