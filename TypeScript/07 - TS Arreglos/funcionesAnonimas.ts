var nombres: string[] = ["Micho", "Tito", "Gordo", "Cabezon"];

console.log(nombres);

nombres.forEach((nombre)=>{
    if(nombre=="Tito"){
        console.log("Vos no tito");
    }else {
        console.log(nombre);
    }
})