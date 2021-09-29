import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroService } from './shared';
import { ListarLivroComponent } from './listar/listar-livro.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarLivroComponent } from './cadastrar';
import { ExcluirLivroComponent } from './excluir';
import { EditarLivroComponent } from './editar';


@NgModule({
  declarations: [ 
    ListarLivroComponent, 
    CadastrarLivroComponent,
    ExcluirLivroComponent,
    EditarLivroComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

  providers: [
    LivroService
  ]
})
export class LivrosModule { }
