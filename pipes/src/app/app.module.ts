import { ptbrLocale } from './pt-br-locale';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [   
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: ptbrLocale
    } 
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR'
    //   // useClass: '',
    //   // useFactory:

    // }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
