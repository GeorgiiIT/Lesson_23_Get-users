const getFile = (file, cb) => {
	console.log(`Start getting ${file}`);

	let xhr = new XMLHttpRequest();
	
	xhr.open(`GET`,file); // method: GET, POST
	xhr.send();

	xhr.addEventListener(`readystatechange`, ()=>{
		 //console.log(xhr.readyState, xhr.response, xhr.status);
		 if(xhr.readyState === 4){
			  console.log(`End getting ${file}`);
			  xhr.status === 200 ? cb(JSON.parse(xhr.response)) : console.log(xhr.status, xhr.statusText);
		 }
	})
}
const users = []

const dataGetted = file =>{
	file.children
	console.log(file.children)
	users.push(...file.children)
	console.log(users)
	
}
getFile(`js/data.json`, dataGetted);
getFile(`js/data2.json`, dataGetted);














