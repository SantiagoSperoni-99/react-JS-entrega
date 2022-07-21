import './Navbar.css';
import Button from '../Button/Button';
import CarWidget from '../CarWidget/CarWidget';

const Navbar = () => {
    return ( 
        <nav> 
            <div> Raizar Beauty</div>
            <div>
                <Button 
                label="Makeup"
                />   
                
                <Button 
                label="Skincare"
                /> 
                
                <Button
                 label="Contacto"
                 /> 

                 <CarWidget />
            
            </div>
        </nav>
    )

};

export default Navbar;