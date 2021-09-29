import { Component, OnInit } from '@angular/core';
import { LivroService, Livro } from '../shared';

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.css']
})
export class ListarLivroComponent implements OnInit {

  livros:Livro[];

  constructor(private servicoLivro: LivroService) { }

  ngOnInit(): void {
    this.livros = this.listarLivros();
    // this.livros =[//aqui podemos criar tarefas manualmente, se quisermos, mas iremos criar tarefas pelo html(navegador) quando tiver tudo implementado
    //   new Livro(1, "O Nome da Rosa", "Humberto Eco", "978-8501115829", "16/12/2019", "Record", 592, true),
    //   new Livro(2, "O Pequeno Príncipe", "Antoine de Saint-Exupéry", "978-8595081512", "27/08/2018", "HarperCollins", 96, false),
    //   new Livro(3, "Harry Potter e o Prisioneiro de Azkaban", "J. K. Rowling", "978-8532530806", "19/08/2017", "Rocco", 288, false),
    //   new Livro(4, "Harry Potter e o Prisioneiro de Azkaban", "J. K. Rowling", "978-8532530806", "19/08/2017", "Rocco", 288, false),
    // ]

      // public id?: number,      
      // public titulo?: string,
      // public autor?: string,
      // public isbn?: string,
      // public data_publicacao?: string,
      // public editora?: string,
      // public paginas?: number,
      // public disponivel?: boolean
  }

  listarLivros(): Livro[] {
    return this.servicoLivro.listarLivros();
  }

}
