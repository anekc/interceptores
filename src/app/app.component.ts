import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interceptores';

  constructor(private usuarios: UsuariosService){
this.usuarios.getUsers().subscribe(res => {
  console.log(res);
}, (err) => {
  console.log('error en el app component');
});
  }


}
