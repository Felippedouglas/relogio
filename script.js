function startTime() {
    var hoje = new Date();
    var horas = hoje.getHours();
    var minutos = hoje.getMinutes();
    var segundos = hoje.getSeconds();
    var dias = hoje.getDay();
    var data = hoje.getDate();
    var mes = hoje.getMonth();
    var verificarMes = hoje.getMonth();
    var ano = hoje.getFullYear();
    var dia = dias;

    switch (dia) {
        case 0:
            dia = "domingo";
            break;
        case 1:
            dia = "segunda";
            break;
        case 2:
            dia = "terça-feira";
            break;
        case 3:
            dia = "quarta-feira";
            break;
        case 4:
            dia = "quinta-feira";
            break;
        case 5:
            dia = "sexta-feira";
            break;
        case 6:
            dia = "sabado";
            break;
    }

    switch (mes) {
        case 0:
            mes = "janeiro";
            break;
        case 1:
            mes = "fevereiro";
            break;
        case 2:
            mes = "março";
            break;
        case 3:
            mes = "abril";
            break;
        case 4:
            mes = "maio";
            break;
        case 5:
            mes = "junho";
            break;
        case 6:
            mes = "julho";
            break;
        case 7:
            mes = "agosto";
            break;
        case 8:
            mes = "setembro";
            break;
        case 9:
            mes = "outubro";
            break;
        case 10:
            mes = "novembro";
            break;
        case 11:
            mes = "dezembro";
            break;
    }
    
    // adicione um zero na frente de números<10
    minutos = checkTime(minutos);
    segundos = checkTime(segundos);
    document.getElementById('txt').innerHTML = dia + "," + " " + data + " " + "de" + " " + mes + " " + "de" + " " + ano + " " + " | " + horas + ":" + minutos + ":" + segundos;
    document.getElementById('hora').innerHTML = horas + ":" + minutos;
    t = setTimeout('startTime()', 500);    

    if (ano < 2021) {
        document.getElementById('txt').innerHTML = "verifique a data do seu dispositivo!" + "<br>" + dia + "," + " " + data + " " + "de" + " " + mes + " " + "de" + " " + ano + " " + " | " + horas + ":" + minutos + ":" + segundos + " " + " " + " " + "<br>" + "o ano: " + "''" + ano + "''" + " Está errado ";
    }

    else if (verificarMes < 10) {
        document.getElementById('txt').innerHTML = "verifique a data do seu dispositivo!" + "<br>" + dia + "," + " " + data + " " + "de" + " " + mes + " " + "de" + " " + ano + " " + " | " + horas + ":" + minutos + ":" + segundos + " " + " " + " " + "<br>" + "o mês: " + "''" + mes + "''" + " Está errado ";
    }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}