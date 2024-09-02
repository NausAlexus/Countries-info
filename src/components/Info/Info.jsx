import './Info.css';
import { IoIosArrowBack } from "react-icons/io";

function Info(props) {

	return (
    	<div className='info-container'>
            <p>Area: {props.area} km²</p>
            <p>Continent: {props.continents}</p>
            <p>Capital: {props.capital}</p>
			<button onClick={props.handleCloseInfo} className='info-btn'><IoIosArrowBack /></button>
        </div>
	);

};

export default Info;