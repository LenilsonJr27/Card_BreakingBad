const list      = document.querySelectorAll('.actions');
const container = document.querySelector('.actionsCard');
let likes = 0;

list[0].addEventListener('click', (event)=> {
	addLike();
});

function addLike(){
	let div = document.createElement('div');
	if (document.querySelector('.countLikeContainer')) document.querySelector('.countLikeContainer').remove();
	div.setAttribute('class', 'countLikeContainer');
	likes++;		
	div.innerHTML = `
		<img class="like-img" src="https://cdn-icons-png.flaticon.com/128/739/739231.png" />
		<span>	
			${likes}
		</span>
	`;	
	container.appendChild(div);	
}

