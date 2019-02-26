import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa-lista',
  templateUrl: './tarefa-lista.component.html',
  styleUrls: ['./tarefa-lista.component.css']
})
export class TarefaListaComponent implements OnInit {
  tarefas = [];
  tarefa = 'aa';
  isAdmin = true;
  profile = 2;

  add(): void {
    this.tarefas.push(this.tarefa);
  }

  constructor() {}

  ngOnInit() {}
}
