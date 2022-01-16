import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'holaMundo';
  nombre:string = "Juan";
  alumno:any = {
    nombre: "Pedro",
    apellido: "Rodriguez"
  }

  img:string = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F0%2Fe%2F4%2F875423-boca-juniors-hd-wallpapers-1920x1080-720p.jpg&f=1&nofb=1'
  value:string = 'Me acostumbré a ti amor'

  email:string = '';
  password:string = '';

  ngOnInit(){

  }

  ingresar(){
    console.log(this.email);
    console.log(this.password);
  }
}
