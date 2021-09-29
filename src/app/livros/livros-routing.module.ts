import { Routes } from "@angular/router";
import { ListarLivroComponent } from "./listar";
import { CadastrarLivroComponent } from "./cadastrar";

export const LivroRoutes: Routes = [
    {
        path:'livros',
        redirectTo: 'livros/listar'
    },
    {
        path: 'livros/listar',
        component:ListarLivroComponent
    },
    {
        path: 'livros/cadastrar',
        component: CadastrarLivroComponent
    }

]