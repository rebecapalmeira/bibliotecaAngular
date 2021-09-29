import { Injectable } from '@angular/core';
import { Livro } from './livro.model';

@Injectable(

)

export class LivroService {

  constructor() { }

  listarLivros(): Livro[] {
    const livros = localStorage['livros'];
    return livros ? JSON.parse(livros):[];
  }

  cadastrarLivro (livro:Livro): void {
    const livros = this.listarLivros();
    livro.id = new Date().getTime(); 
    livros.push(livro);
    localStorage['livros'] = JSON.stringify(livros);
  }

  buscarPorId (id: number): Livro {
    const livros: Livro[] = this.listarLivros();
    return livros.find(livro => livro.id === id);
  }

  // editarLivro (livro:Livro):void {
  //   const livros: Livro[] = this.listarLivros();
  //   livros.forEach((obj, index, obj) => {
  //     if (livro.id === obj.id) {       
  //       livro.titulo = '';
  //       livro.autor = '';
  //       livro.isbn = '';
  //       livro.data_publicacao = '';
  //       livro.editora = '';
  //       livro.paginas = 0;
  //       livro.disponivel = true;
  //     }
  //   })
  //   localStorage['livros'] = JSON.stringify(livros);
  // }

  excluirLivro (id:number):void {
    let livros: Livro[] = this.listarLivros();
    livros = livros.filter(livro => livro.id !== id);
    localStorage['livros'] = JSON.stringify(livros);
  }

  // atualizarStatus (id:number):void {
  //   const livros: Livro[] = this.listarLivros();
  //   livros.forEach((livro, index, livros) => {
  //     if (id === livro.id) {
  //       livros[index].disponivel = !livro.disponivel;
  //     }
  //   });
  //   localStorage['livros'] = JSON.stringify(livros);
  // }

}
