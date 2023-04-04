import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student-service.service';
import { Student } from 'src/app/models/student';
import { Router } from '@angular/router';
@Component({
  selector: 'app-afficherstudent',
  templateUrl: './afficherstudent.component.html',
  styleUrls: ['./afficherstudent.component.css'],
})
export class AfficherstudentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: StudentService,
    private router: Router
  ) {}
  id: string;
  student: Student;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.afficheUnStudent();
  }

  afficheUnStudent() {
    this.service.getOne(this.id).subscribe((onedata) => {
      console.log('donnée : ', onedata);
      this.student = onedata;
    });
    console.log(this.student);
  }

  onclik() {
    this.router.navigate(['/']);
  }
}
