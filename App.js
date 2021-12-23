//import logo from './logo.svg';
import './App.css';

function App() {
  const mob=["android","Blackberry","Iphone","Windows Phone"];
  const man=["sumsung","htc","Apple","Micromacx"];
  return (
    <div className="App">
     <h1>Mobile Operating System</h1>
     <ul class="ul">
       {
         mob.map(e=> <Myf nam={e}/>)
       }
     </ul>
      <h1>Mobile Manufacturing System</h1>
     <ul class="ul">
        {
         man.map(e=> <Myf nam={e}/>)
       }
      </ul>
    </div>
  );
}
function Myf({nam}){
  return <li>{nam}</li>
}

export default App;
