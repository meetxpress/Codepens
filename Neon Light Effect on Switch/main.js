function backEffects() {	         
    if (document.getElementById("customSwitches").checked == true){             
        document.getElementById("n").style.textShadow = "0 0 15px #15F4EE, 0 0 15px #15F4EE";
    } else {               
        document.getElementById("n").style.color = "white";
        document.getElementById("n").style.textShadow = "0 0 0 #000";
    }	
}
