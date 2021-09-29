import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Livro, LivroService } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.css']
})


export class CadastrarLivroComponent implements OnInit {
  @ViewChild('formLivro', {static:true})formLivro: NgForm;

  livro: Livro;

  constructor(private servicoLivro: LivroService, private router: Router) { }

  ngOnInit(): void {
    this.livro = new Livro();
  }

  cadastrarLivro():void {
    if (this.formLivro.form.valid) {
      this.servicoLivro.cadastrarLivro(this.livro);
      this.router.navigate(["/livros"]);
    }
  }


}
