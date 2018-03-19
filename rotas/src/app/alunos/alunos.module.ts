import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';


@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
    
  ],
  declarations: [
    AlunosComponent, 
    AlunoFormComponent,    
    AlunoDetalheComponent
  ],
  providers: [AlunosService],
})
export class AlunosModule { }
