	function menuFunc(){
		var x = document.getElementById("menu");
		if (x.className === "mobile") {
			x.className += "click";
		} else {
			x.className = "mobile";
		}
	}
	
	var slideIndex = 0;
	showSlides();

	function showSlides() {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"; 
		}
		slideIndex++;
		if (slideIndex > slides.length) {slideIndex = 1} 
			slides[slideIndex-1].style.display = "block"; 
			setTimeout(showSlides, 5000); // Change image every 2 seconds
	}
	
	function enviar(){
		alert("Servicio momentaneamente suspendido")
		// var jsondata;
		// var nom = document.getElementById("nombre").value;
		// var email = document.getElementById("email").value;
		// var asun = document.getElementById("asunto").value;
		// var men = document.getElementById("mensaje").value;
		// mail = { "nombre": nom, "email": email, "asun": asun, "mensaje": men };			
		// Param = JSON.stringify(mail);
		// xmlhttp = new XMLHttpRequest();
		// xmlhttp.onreadystatechange = function() {
		// 	if (this.readyState == 4 && this.status == 200) {
		// 		alert('Gracias por contactarnos, pronto nos estaremos comunicando con ustedes');
		// 		window.location='contacto.html';
		// 	}
		// };
		// xmlhttp.open("GET", "envio2.php?x=" + Param, true);
		// xmlhttp.send();	
	}
	
	function contacta(){
		window.location='contacto.html';
	}	
	
	function noticias(){
		var i;
		var arr = ['analisisPym']
		for (i = 0; i <= 0; i++) { 	
			escribirNoticias(document.getElementById("noticiaPrincipalTit" + i), document.getElementById("noticiaPrincipal" + i), arr[0]);	
		}
	}
	
	function escribirNoticias(noticia, contnoticia, pag){ 	
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var noti = JSON.parse(this.responseText);
				noticia.innerText = noti.titulo;
				contnoticia.className += " fondonoticias1";			
			}	
		};
		xmlhttp.open("GET", pag + ".php", true);
		xmlhttp.send();	
	}