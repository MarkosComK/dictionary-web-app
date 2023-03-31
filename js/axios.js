const submit = document.querySelector("#submit")
const searchedWord = document.querySelector("#searched-word")
const pronounce = document.querySelector("#pronounce")
let word = ""
let data

submit.addEventListener("click", (e) => {
	e.preventDefault()
	word = document.querySelector("#input").value
	const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
	
	axios.get(url).then(function (response) {
		data = response.data[0]
		console.log(data);
		//console.log(data)

		innerData()

	}).catch(function (error) {
		console.error(error);
	});

})

window.addEventListener("load", () => {
	word = "keyboard"
	const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
	
	axios.get(url).then(function (response) {
		data = response.data[0]
		console.log(data);
		//console.log(data)

		innerData()

	}).catch(function (error) {
		console.error(error);
	});
})
 
function innerData(){
	//inner the data inside the html elements
	searchedWord.innerHTML = `${data.word}`
	pronounce.innerHTML = `${data.phonetic}`
	
	//get the audio
	pronounceAudio = undefined // clear the audio before inner a new one
	getAudio()	

	//inner the meanings ul
	const meaningSection = document.querySelector("#meaning-section")
	const meaning = data.meanings
	console.log(meaning)
	meaningSection.innerHTML = `
	${meaning.map(meaning => {
		const definitions = meaning.definitions
		const synonyms = meaning.synonyms
		return (
			`<h2 class="word-type">${meaning.partOfSpeech}</h2>
			<div class="meaning-wrapper">
			  <p>Meaning</p>
			  <ul>
			  ${definitions.map(definition => {return `<li>${definition.definition}</li>`})}
			  </ul>
			</div>
			<div class="synonums"˝>
			  <p>Synonyms ${synonyms.map(synonym => {return ` <span>${synonym}</span>`})}</p>
			</div>`
		)
	})}
	`
}


// scope to get the audio and play˝
var pronounceAudio
function getAudio(){
	let phonetics = data.phonetics
	let audioSrc
	phonetics.forEach(phonetic => {
		if(phonetic.audio.length > 0){
			audioSrc = phonetic.audio
		}
	});
	pronounceAudio = new Audio(audioSrc)
	
	//select play button html and add listener to play the audio
	const playBtn = document.querySelector("#play-audio")
	playBtn.addEventListener("click", () => {
		pronounceAudio.play()
	})
}