import logo from './logo.svg';
import './App.css';



function App() {
    
    const func = () => {
        alert("clicked on the button");
    };
    const parafunc = (para,name) => {
        alert(para +"  button clicked on the button"+name);
    };


  return (
      <div className="App">
          <h1>REACT FIRST APP</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
                  <code><table>
                      <tr>
                          <td>
                              
                              <button onClick={func}> normal click </button>
                              <button onClick={() => parafunc('parameter','sudeep')}>parameterizeed button click </button>
                          </td>
                          <td>new side</td>
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
              <a
                  className="App-link"
                  href="Home.js"
                  target="_blank"
                  rel="noopener noreferrer"
              > Home </a>
      </header>
      </div>
     
  );
    
}





export default App;
