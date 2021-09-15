/*Validation*/
let validForm = document.validateform,
submit = validForm.submit,
name = validForm.name,
venuename = validForm.venuename,
venuecity = validForm.venuecity,
statecity = validForm.statecity,
email = validForm.email,
subject = validForm.subject,
messagearea = validForm.messagearea,
fields = validForm.querySelectorAll('.field')

validForm.addEventListener('submit', function(event){
	event.preventDefault()
	for (let i = 0; i < fields.length; i++){
		if(!fields[i].value){
			fields[i].className += ' error'
		}
	}
})
/*Cookie click*/
let cookieBody = document.querySelector('.cookie'),
cookieBtn = cookieBody.querySelector('.cookie__item a')

cookieBtn.addEventListener('click', hideCookie)

function hideCookie(){
	let cookiePosition = cookieBody.style.bottom,
	cookieInterval = setInterval(frameBottom, 0),
	start = Date.now()
	function frameBottom(){
		cookiePosition = (cookiePosition - 2)
		cookieBody.style.bottom = cookiePosition + 'px'
		console.log(Math.abs(cookiePosition))
		if (Math.abs(cookiePosition) >= cookieBody.offsetHeight){
			document.querySelector('.cookie').remove()
			clearInterval(cookieInterval)
			return
		}
	}	
}