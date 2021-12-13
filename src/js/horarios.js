export const horarios ={
    horario01: 
                {
                    dia: 'lunes a vierens',
                    hora1: '9 a 13 hs.',
                    hora2: '14 a 18 hs.',
                },
    horario02:
                {
                    dia: 'sábados',
                    hora1: '9 a 13 hs.',
                    hora2: '14 a 18 hs.',
                }
}



export const testCLG = () =>{

    var numeros = [1, 4, 9];
    console.log(numeros)
    var dobles  = numeros.map(function(num) {
        
        return num * 2;
    });
    console.log(dobles)
}

