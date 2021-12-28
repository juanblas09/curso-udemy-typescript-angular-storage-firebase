var n:number = 15;

switch (n) {
    case 14:
        console.log("14")
        break;
    case 15:
        console.log("15")
        break;
    default:
        console.log("Ninguno")
        break;
}

enum menu {
    inicio,
    album,
    cancion
}

var opt:number = 1

switch (opt) {
    case menu.inicio:
        console.log("Inicio")
        break;
    case menu.album:
        console.log("Album")
        break;
    case menu.cancion:
        console.log("Cancion")
        break;
    default:
        break;
}