import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: Student[];
  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.studentService.getConfig().subscribe((data) => {
      console.log('Dataa : ', data);
      this.students = data;
    });
    console.log(this.students);
  }

  onajouterStudent(id: number) {
    this.router.navigate(['afficher', id]);
  }
  ondeleteStudent(id: number) {
    console.log('ddddd', id);
    this.studentService.deleteStudent(id).subscribe({
      next: (res) => {
        this.students = this.students.filter((s) => s.id != id);
      },
      error: (err) => {
        console.log('ERRORR : ', err);
      },
    });
  }
  onupdateStudent(id: number) {
    this.router.navigate(['modifier', id]);
  }
}
