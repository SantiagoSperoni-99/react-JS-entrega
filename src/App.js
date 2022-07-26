import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

    const handleOnAdd = (quantity) => {
        console.log('Cantidad de items agregados:', quantity)
    }

    return ( 
        <div className = "App" >

        <header className = "App-header">
            <Navbar />       
        </header> 

        <ItemListContainer greeting="Hola Coders"/>
     
        <Counter stock={10} initial={1} onAdd={handleOnAdd} />

        </div>
    );
}

export default App;