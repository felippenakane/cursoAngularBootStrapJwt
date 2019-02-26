import { User } from './user/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarefas';
  upperTexto = 'Mostrar letras maiusculas';
  lowerTexto = 'Mostrar letras minusculas';
  percentuaNumero = 0.5;
  date = new Date();
  profile = 2;
  isAdmin = true;
  dinheiro = 579;
  user: User = {
    name: 'Paulo',
    age: 25
  };
}
