let btnGerar = document.querySelector("#gerar-qr");
let box = document.querySelector(".box");
let divQrCode = document.querySelector(".qr-code");

function gerarCodigoQr() { 
    let campoQr = document.querySelector("#campo-qr").value;

    box.innerHTML = ""; // Limpa o conteúdo anterior do box

    if (campoQr.trim() != "") { 

        var qrCode = new QRCode(box,{ 
            text: campoQr,
            width: 300,
            height: 300,
           });
           divQrCode.classList.add("display-hidden");
           
          setTimeout(() => { 
            const img  = box.querySelector("img"); 
            const dowload = document.querySelector("#download");
            dowload.href = img.src; },300);// Define o link para download da imagem
        ;
    } else {
        divQrCode.classList.remove("display-hidden")
        alert("Campo vazio! Por favor, preencha o campo com o texto desejado.");
    }
    }

    btnGerar.addEventListener("click", gerarCodigoQr);  