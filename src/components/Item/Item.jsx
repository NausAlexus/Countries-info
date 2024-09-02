import './Item.css';
import Info from '../Info/Info';
import { useState } from 'react';

function Item(props) {

    const[info, setInfo] = useState(false)

    // Открываем информацию о стране
    const handleOpenInfo  = () => {
        setInfo(!info)
    }

	return (
        <>
            <div onClick={handleOpenInfo} className='item-container'>
                <div className='flag-img'>
                    <img className='image' src={props.img} alt={props.name} />
                </div>
                <p className='name'>{props.name}</p>
            </div>
            {info && <Info 
                area={props.area}
                continents={props.continents}
                region={props.region}
                capital={props.capital}
                handleCloseInfo={handleOpenInfo}
            />}
        </>
	);

};

export default Item;