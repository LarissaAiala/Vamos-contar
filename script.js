function contar() {
    //var img = document.getElementById('imagem')
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    //img.src='contar.png'

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            p = 1
            window.alert('Passo invalido. Impossivel contar!!!')
        }
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
                
            }
        }else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        
        res.innerHTML += ` \u{1F3C1}`
    }
}




/*
var c = i
while(c<=f) {
res.innerHTML += `${c} \u{1F449}`
c+=p
}
*/