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
	let phonetics = data.phonetics
	let audioSrc
	phonetics.forEach((phonetic, index) => {
		if(phonetic.audio.length > 0){
			audioSrc = phonetic.audio
		}
	});
	const pronounceAudio = new Audio(audioSrc)

	//select play button html and add listener to play the audio
	const playBtn = document.querySelector("#play-audio")
	playBtn.addEventListener("click", () => {
		pronounceAudio.play()
	})

	//inner the meanings ul
	const meaningSection = document.querySelector("#meaning-section")
	const meaning = data.meanings
	const definitions = meaning[0].definitions
	meaningSection.innerHTML = `
	<h2 class="word-type">${meaning[0].partOfSpeech}</h2>
	<div class="meaning-wrapper">
	  <p>Meaning</p>
	  <ul>
	  ${definitions.map(definition => {return `<li>${definition.definition}</li>`})}
	  </ul>
	</div>
	<div class="synonums">
	  <p>Synonums <span>eletronic keyboard</span></p>
	</div>
	`
}