/* acima de 5 anos criança
acima de 14 anos jovem
acima de 24 anos adulto
acima de 54 anos idoso

*/
function verify(){
var data = new Date()
var ano = data.getFullYear()

var nasc = window.document.getElementById('nasc1')
var resano = window.document.getElementById('resano')
if (nasc.value.length == 0 || nasc.value > ano ){//verificar se o usuario digitou errado ou digitou nada
    window.alert('Erro , verifique os dados e tente novamente!')
}

else { //calculo da idade
    var sexo = document.getElementsByName('radsex')
    idade = ano - Number(nasc.value)
    //checagem do sexo do usuario 
    var genero = ''
    
    var img = document.createElement('img')//para abrir a imagem
    img.setAttribute('id', 'foto')
    
    if (sexo[0].checked){//verificar o genero que esta marcado
        genero = 'Homem'
        if (idade >= 0 && idade < 5){
            //bebe
            img.setAttribute('src', 'img/bebem.png')//selecionar a imagem
        } else if (idade < 14){
            //criança
            img.setAttribute('src', 'img/menino.png')
        }else if (idade < 24){
            //jovem
            img.setAttribute('src', 'img/jovemm.png')
        }else if (idade < 54){
            //adulto
            img.setAttribute('src', 'img/adultom.png')
        }else{
            //idoso
            img.setAttribute('src', 'img/idoso.png')
        }
    }else if (sexo[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 5){
            //bebe
            img.setAttribute('src','img/bebef.png')
        } else if (idade < 14){
            //criança
            img.setAttribute('src', 'img/menina.png')
        }else if (idade < 24){
            //jovem
            img.setAttribute('src','img/jovemf.png')
        }else if (idade < 54){
            //adulto
            img.setAttribute('src','img/adultof.png')
        }else{
            //idoso
            img.setAttribute('src','img/idosa.png')
        }
    }
    resano.style.textAlign = 'center'//ponhar no centro da pagina
resano.innerHTML = `Detectamos ${genero} com  ${idade} anos.`
resano.appendChild(img)//fazer a imagem aparecer 
}



}