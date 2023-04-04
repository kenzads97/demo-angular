import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { StudentsComponent } from './components/students/students.component';
import { AfficherstudentComponent } from './components/afficherstudent/afficherstudent.component';
import { UpdatestudentsComponent } from './components/updatestudents/updatestudents.component';
const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'form', component: FormComponent },
  { path: 'afficher/:id', component: AfficherstudentComponent },
  { path: 'modifier/:id', component: UpdatestudentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
