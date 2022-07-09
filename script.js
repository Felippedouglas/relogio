function startTime() {
    var dataHoje = new Date();
    var horas = String(dataHoje.getHours()).padStart(2, '0');
    var minutos = String(dataHoje.getMinutes()).padStart(2, '0');
    var segundos = String(dataHoje.getSeconds()).padStart(2, '0');
    var dias = dataHoje.getDay();
    var data = String(dataHoje.getDate()).padStart(2, '0');
    var mes = dataHoje.getMonth();
    var ano = dataHoje.getFullYear();
    var dia = dias;

    
    // arrays //
    var diasSemana = ['domingo', 'segunda', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado']
    var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    if (horas >= 6 && horas <= 11) {
        document.getElementById('mensagem').innerHTML = 'Bom dia :)'
        document.body.style.backgroundImage = 'url(./imagens/manha.jpg)'
    } else if (horas >= 12 && horas <= 17) {
        document.getElementById('mensagem').innerHTML = 'Boa tarde :)'
        document.body.style.backgroundImage = 'url(https://www.portalveneza.com.br/wp-content/uploads/2019/06/tempo-clima-sol-nuvens.jpg)'
    } else if ((horas >= 18 && horas <= 23) || (horas >= 0 && horas <= 5)) {
        document.getElementById('mensagem').innerHTML = 'Boa noite :)'
        document.body.style.backgroundImage = 'url(./imagens/noite.jpg)'
    }

    var txtData = document.getElementById('txt-data')
    txtData.innerHTML = `${diasSemana[dia]}, ${data} de ${meses[mes]} de ${ano} | ${horas}:${minutos}:${segundos}`;
    document.getElementById('hora').innerHTML = `${horas}:${minutos}`;

    if (ano != 2022) {
        txtData.innerHTML = `verifique a data do seu dispositivo! <br> ${diasSemana[dia]}, ${data} de ${meses[mes]} de ${ano} | ${horas}:${minutos}:${segundos} <br> o ano: '' ${ano} '' Está errado`;
    }
}

setInterval( startTime, 500 )