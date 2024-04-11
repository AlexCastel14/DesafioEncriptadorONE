function encryptText(){
    var resultText = document.getElementById("textInput").value.replace("a","ai").replace("e","enter").replace("i","imes").replace("o","ober").replace("u","ufat");
    document.getElementById("outputResultImage").style.display = "none";
    document.getElementById("noMessageFound").style.display = "none";
    document.getElementById("resultText").innerHTML = resultText;

    textInput = document.getElementById("textInput");
    textInput.value = "";
    textInput.focus();
    
}

function decryptText(){
    var resultText = document.getElementById("textInput").value.replace("ai","a").replace("enter","e").replace("imes","i").replace("ober","o").replace("ufat","u");
    document.getElementById("outputResultImage").style.display = "none";
    document.getElementById("noMessageFound").style.display = "none";
    document.getElementById("resultText").innerHTML = resultText;

    textInput = document.getElementById("textInput");
    textInput.value = "";
    textInput.focus();
}

function manipulateText(value){
    if (value == "encrypt"){
        encryptText()
    } else if (value == "decrypt"){
        decryptText()
    }
}