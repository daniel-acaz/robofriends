import React from 'react';

function SearchBox( {setOnChante} ) {
	return ( 
		<div className= 'pa2'>
			<input className='pa3 ba b--green bg-lightest-blue' 
				type='search' 
				placeholder='search robots...'
				onChange = {setOnChante}/>
		</div>
	)
}

export default SearchBox;