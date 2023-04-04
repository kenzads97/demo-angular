import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  API_URL = 'http://localhost:8080/api/';
  // readreadonlyonly ENDPOINT_STUDENT = "/api"

  constructor(private Http: HttpClient) {}

  getConfig(): Observable<Student[]> {
    return this.Http.get<Student[]>(this.API_URL);
  }
  postStudent(Student: { name: string; age: number }) {
    console.log('ahaaaaa', Student);
    this.Http.post('http://localhost:8080/api/', Student).subscribe(
      (res: any) => {
        console.log(res);
      }
    );
  }

  getOne(id: string): Observable<Student> {
    return this.Http.get<Student>(this.API_URL + id);
  }
  deleteStudent(id: number) {
    return this.Http.delete(this.API_URL + id);
  }
  updateStudent(student: Student, id: string) {
    this.Http.put(this.API_URL + id, student).subscribe((res) => {
      console.log(res);
    });
  }
}
