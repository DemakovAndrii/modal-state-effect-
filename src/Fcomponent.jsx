import React, { useEffect, useState } from 'react'
import cl from './classes.css'


export default function Fcomponent() {

	const [modal, setModal] = useState()

	const handleClick = () => {
		setModal(!modal)
	}

	useEffect(() => {
		document.body.classList.toggle('lock', modal)
	}, [modal])

	return (
		<div>
			<div className={`modal ${modal ? "active" : ""}`}>
				<div className='wind'>
					its modal
					<button onClick={handleClick} className='butt'>closr</button>
				</div>
			</div>
			<button onClick={handleClick} style={{ display: 'flex', margin: '0 auto' }}>sdjf;lsdkhfj;laskfdsafasdaasdasdgerg vcnbgdsfg hgf</button>
		</div >
	)
}