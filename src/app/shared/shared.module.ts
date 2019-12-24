import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpService } from './services/http.service';


/* Prime NG modules */
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { OverlayPanelModule } from 'primeng/overlaypanel';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule, ReactiveFormsModule, HttpClientModule,
    OverlayPanelModule,
    CalendarModule, ToastModule, FormsModule,
    DialogModule, AutoCompleteModule, RouterModule
  ],
  providers: [HttpService],
  exports: [HeaderComponent,
    CalendarModule, ToastModule,
    DialogModule, AutoCompleteModule,
    FooterComponent, ReactiveFormsModule, FormsModule,
    OverlayPanelModule, RouterModule]
})
export class SharedModule { }
