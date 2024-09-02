import './Main.css';
import Title from '../Title/Title';
import Items from '../Items/Items';
import Info from '../Info/Info';
import { useState } from 'react';

function Main() {

	return (
    	<div className='main'>
            <Title/>
			<Items/>
        </div>
	);

};

export default Main;