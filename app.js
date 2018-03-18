const AllowedCarsCount  = 120;

const Counter  = document.querySelector('.counter');
const TweetBox = document.querySelector('.tweet-box textarea');


Counter.innerHTML  = AllowedCarsCount;

TweetBox.addEventListener( 'keydown' , function (e) {
	let typedCarsCount = TweetBox.value.length;
	let limit = AllowedCarsCount - typedCarsCount;
	Counter.innerHTML = limit;

	if( limit < 0 )
	{
		Counter.style.color = 'red';
	}else{
		Counter.style.color = '#000';
	}
})