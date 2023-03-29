

const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

axios.get(url).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});