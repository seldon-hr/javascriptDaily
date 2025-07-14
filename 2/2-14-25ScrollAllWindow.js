//Function to make a fullScroll in a window
//Until there's anymore content.

async function scrollAll(){
	let heightWindow = document.body.scrollHeight;
	
	const scrollToBottom = () => {
		window.scrollTo(0, document.body.scrollHeight);
	}

	while(true){
		scrollToBottom();
		await new Promise(resolve => setTimeout(resolve, 2000));
		
		let newHeight = document.body.scrollHeight;
		

		if(newHeight === heightWindow){
    	break;
		}
		heightWindow = newHeight;
	}
}

scrollAll();
