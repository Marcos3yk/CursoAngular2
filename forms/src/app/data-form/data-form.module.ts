import { ConsultaCepService } from './../shared/consulta-cep.service';
import { HttpModule } from '@angular/http';
import { DataFormComponent } from './data-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    DataFormComponent
  ],
  providers: [
  ]
})
export class DataFormModule { }
