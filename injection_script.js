window.alert("extention by yann et adrien");

var intentions = document.querySelectorAll('li[lang=intention]')

intentions.forEach(i=>{
	fetch('https://bondinbox-api.herokuapp.com/gmail_api/getIntentionById/'+i.getAttribute('summary'))
	  .then(response => response.json())
	  .then(commits => console.log(commits[0]))
	var intention = document.createElement("li");
    intention.className = "intention"
	intention.innerHTML = "<Strong> Intention spotted ! </strong>Next step: fetch and insert intention "+i.getAttribute('summary');
	i.parentNode.replaceChild(intention, i);
});