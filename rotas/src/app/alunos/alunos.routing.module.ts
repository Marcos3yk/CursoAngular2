import { Resolve } from '@angular/router';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { CanActivateChild, CanDeactivate } from '@angular/router';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';


const alunosRoutes = [
    {path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children : [
        {path: 'novo', component: AlunoFormComponent},
        {path: ':id', component: AlunoDetalheComponent,
            resolve: {aluno : AlunoDetalheResolver}
        },
        {path: ':id/editar', component: AlunoFormComponent, 
            canDeactivate: [AlunosDeactivateGuard]
        }
    ]} 
    
    
];

@NgModule({
   imports: [RouterModule.forChild(alunosRoutes)],
   exports: [RouterModule]
   
})

export class AlunosRoutingModule {}