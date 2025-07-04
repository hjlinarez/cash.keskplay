export function evento(setCarrera) {
    fetch('https://api.keskplay.com/api/ruleta/sorteo')
        .then(response => response.json())
        .then(
            function(data){
                console.log(data);
                if (data.idsorteo > 0) setCarrera(data);                         
            }
            );
}


export function fechahoy(idioma) {
        var fecha = new Date(); //Fecha actual
        var mes = fecha.getMonth()+1; //obteniendo mes
        var dia = fecha.getDate(); //obteniendo dia
        var ano = fecha.getFullYear(); //obteniendo año
        if(dia<10)
            dia='0'+dia; //agrega cero si el menor de 10
        if(mes<10)
            mes='0'+mes //agrega cero si el menor de 10
        if (idioma == 'ESP')
            return dia+"/"+mes+"/"+ano;
        else
            return ano+"-"+mes+"-"+dia;
    }