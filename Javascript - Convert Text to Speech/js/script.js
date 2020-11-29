function Speak(){
	var text = document.getElementById('text');
	if(text.value == ""){
		alert("Please enter some text");
	}else{
		responsiveVoice.setDefaultVoice("US English Male");
		responsiveVoice.speak(text.value);
		text.value = "";
	}
}