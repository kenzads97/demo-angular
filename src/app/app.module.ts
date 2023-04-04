import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './components/students/students.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { AfficherstudentComponent } from './components/afficherstudent/afficherstudent.component';
import { UpdatestudentsComponent } from './components/updatestudents/updatestudents.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    FormComponent,
    AfficherstudentComponent,
    UpdatestudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
