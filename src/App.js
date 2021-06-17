import logo from './logo.svg';
import './App.css';

function TableHead(){
  return (
    <thead>
      <tr>
        <th>
          Nom
        </th>
      </tr>
    </thead>
  )
}

function Table(props){

  return (
    <table>
      <TableHead />
      <tbody>

        {
          props.tasks.map(task => {
              return (
                <tr>
                  <td>{task}</td>
                </tr>
              )
          })
        }
        
      </tbody>
    </table>
  )
}
//comment récupérer la liste des taches depuis express ! 

// on va utiliser fetch pour envoyer une requête à express
// attention : CORS 

function App() {

  return ( // JSX = langage de template qui mélange le html et le javascript
    <div className="App">
        
        <p id="message">
          Bonjour les poulets
        </p>
        
        <Table
          tasks={ ["acheter poulet", "dormir", "courir"]}
       />

    </div>
  );
}

export default App;
