function provera(){
	
	console.log("Ovo je pocetak JS-a");
	//dohvatanje vrednosti iz forme
	var ime= document.getElementById("tbIme").value;
	console.log(ime);
	var prezime= document.getElementById("tbPrezime").value;
	var naslov= document.getElementById("tbNaslov").value;
	var poruka= document.getElementById("tPoruka").value;
	var pol= document.getElementsByName("rbPol");
	//kreiranje 2 niza 
	var greske=new Array();
	var podaci=new Array();
	
	
	
	
	var reIme=/^[A-ZŽŠĆ][a-zžšć]{2,9}$/;//pocinje sa ^ zavrsava sa $ {2 je min,9 je maks}
	var rePrezime=/^[A-ZŽŠĆ][a-zžšć]{2,9}(\s[A-ZŽŠĆ][a-zžšć]{2,9})*$/;
	var reNaslov=/^[\w]+$/;
	if(!reIme.test(ime)){
		greske.push("Ime nije u dobrom formatu!");
	}
	else{
		//dobro uneto ime
		podaci.push("Ime je:"+ime);
	}
	
	if(!rePrezime.test(prezime)){
		greske.push("Prezime nije u dobrom formatu!");
	}
	else{
		//dobro uneto ime
		podaci.push("Prezime je:"+prezime);
	}
	
	if(!reNaslov.test(naslov)){
		greske.push("Naslov nije u dobrom formatu!");
	}
	else{
		//dobro uneto ime
		podaci.push("Naslov je:"+naslov);
	}
	
	//provera poruka
	if(poruka==""){
		greske.push("Unesite poruku!");
	}
	else{
		//dobro uneto ime
		podaci.push("Poruka je:"+poruka);
	}
	
	
	
	
	//provera pola
	var polIzbor="";
	for(var i=0;i<pol.length;i++)
	{
		if(pol[i].checked){
			//dohvatiti ovog koji je cekiran 
			polIzbor=pol[i].value;
			break;
		}
	}
	if(polIzbor==""){
		greske.push("Izaberite pol!");
	}
	else{
		podaci.push("Pol:"+polIzbor);
	}
	//ispis korisniku
	var ispis="<ul>";
	if(greske.length!=0)
	{
		for(var i=0;i<greske.length;i++)
		{
			ispis+="<li>"+greske[i]+"</li>";
		}			
	}
	else{
		//slanje serveru
		for(var i=0;i<podaci.length;i++)
		{
			ispis+="<li>"+podaci[i]+"</li>";
		}	
	}
	ispis+="</ul>";
	document.getElementById("ispis").innerHTML=ispis;
	document.getElementById("ispis").style.display="block";
	
}