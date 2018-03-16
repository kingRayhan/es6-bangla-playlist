const Books  = document.querySelectorAll('#book-list ul li');

Books.forEach( function( book ){
	let dlBtn = book.querySelector('.delete');

	dlBtn.addEventListener( 'click' , function(){
		if(confirm('Are you sure????'))
		{
			book.remove();
		}

	} )

})