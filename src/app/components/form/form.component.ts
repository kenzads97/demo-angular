import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/services/student-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  etudiant: Student;
  studentForm: FormGroup = new FormGroup({
    id: new FormControl('', []),
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+$'),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.maxLength(2),
      Validators.pattern('[1-9]+$'),
    ]),
  });
  constructor(
    private http: HttpClient,
    private service: StudentService,
    private route: Router
  ) {}

  get identifiant() {
    return this.studentForm.get('id');
  }
  get name() {
    return this.studentForm.get('name');
  }

  get age() {
    return this.studentForm.get('age');
  }

  onStudentCreate() {
    console.log('ahaaaaaaaaa', this.age);
    this.etudiant = {
      id: this.identifiant?.value,
      name: this.name?.value,
      age: this.age?.value,
    };
    this.service.postStudent(this.etudiant);
    alert("l'utlisateur a etait ajouter avec succée");
    this.route.navigate(['/']);
  }
}
