//Função com um parâmetro

function parimp(n){
    if(n % 2 == 0){
        return 'par'
    }
    else{
        return 'impar'
    }
}

let res = parimp(7)

console.log(`Esse número é ${res}`)