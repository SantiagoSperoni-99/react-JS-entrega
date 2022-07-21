import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return ( 
        <div className = "App" >

        <header className = "App-header">
            <Navbar />       
        </header> 

        <Counter />

        <ItemListContainer greeting="Hola Coders"/>
     
        </div>
    );
}

export default App;