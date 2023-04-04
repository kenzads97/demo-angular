import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student-service.service';
import { Student } from 'src/app/models/student';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatestudents',
  templateUrl: './updatestudents.component.html',
  styleUrls: ['./updatestudents.component.css'],
})
export class UpdatestudentsComponent implements OnInit {
  id: string;
  student: Student;
  valeur: Student;
  studentForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    age: new FormControl(),
  });
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.studentService.getOne(this.id).subscribe((data) => {
      this.studentForm.setValue({
        id: data.id,
        age: data.age,
        name: data.name,
      });
    });
  }

  get age() {
    return this.studentForm.get('age')?.value;
  }

  get name() {
    return this.studentForm.get('name')?.value;
  }

  get identifiant() {
    return this.studentForm.get('id')?.value;
  }

  afficheUnStudent() {
    this.studentService.getOne(this.id).subscribe((onedata) => {
      console.log('donnée : ', onedata);
      this.student = onedata;
    });
    console.log(this.student);
  }
  onStudentupdate() {
    this.valeur = { id: this.identifiant, name: this.name, age: this.age };
    this.studentService.updateStudent(this.valeur, this.id);
    this.router.navigate(['/']);
  }
}
