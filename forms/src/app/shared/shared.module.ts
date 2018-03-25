import { ConsultaCepService } from './consulta-cep.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownService } from './services/dropdown.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent
  ],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FormDebugComponent,
    CampoControlErroComponent
  ],
  providers: [
    DropdownService,
    ConsultaCepService
  ]
})
export class SharedModule { }
