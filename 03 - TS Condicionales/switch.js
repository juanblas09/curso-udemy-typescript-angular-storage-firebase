var n = 15;
switch (n) {
    case 14:
        console.log("14");
        break;
    case 15:
        console.log("15");
        break;
    default:
        console.log("Ninguno");
        break;
}
var menu;
(function (menu) {
    menu[menu["inicio"] = 0] = "inicio";
    menu[menu["album"] = 1] = "album";
    menu[menu["cancion"] = 2] = "cancion";
})(menu || (menu = {}));
var opt = 1;
switch (opt) {
    case menu.inicio:
        console.log("Inicio");
        break;
    case menu.album:
        console.log("Album");
        break;
    case menu.cancion:
        console.log("Cancion");
        break;
    default:
        break;
}
