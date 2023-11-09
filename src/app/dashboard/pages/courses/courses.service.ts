import { Injectable } from "@angular/core";
import { Course } from "./models";
import { Observable, concatMap, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment.local';

@Injectable({ providedIn: 'root'})
export class CoursesService {

    // courses: Course[] = [
    //     {
    //     id: 1,
    //     name: 'Angular',
    //     startDate: '12/11/2022',
    //     endDate: '01/04/2023',
    // },
    // {
    //     id: 2,
    //     name: 'React',
    //     startDate: '01/04/2023',
    //     endDate: '12/10/2023',
    // }
    // ];
    constructor(private httpClient: HttpClient) { }

    getCourses$(): Observable<Course[]>{
        return this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`);


        // return of(this.courses);
    }

    createCourse$(payload: Course): Observable<Course[]> {
        return this.httpClient.post<Course>(`${environment.baseUrl}/courses`, payload).pipe(concatMap(() => this.getCourses$()
        ));


        // this.courses.push(payload);
        // return of([...this.courses]);
    }

    editCourse$(courseId: number, payload: Course): Observable<Course[]> {

        return this.httpClient.put<Course>(`${environment.baseUrl}/courses/${courseId}`, payload).pipe(concatMap(() => this.getCourses$()
        ));
        // return of(this.courses.map((c) => c.id === id ? { ...c, ...payload} : c));
    }

    deleteCourse$(courseId:number): Observable<Course[]> {
        return this.httpClient.delete<Course>(`${environment.baseUrl}/courses/${courseId}`).pipe(concatMap(() => this.getCourses$()
        ));

        // this.courses = this.courses.filter((c) => c.id !== id);
        // return of(this.courses);
    }

    getCourseById$(courseId: number): Observable<Course | undefined> {
        return this.httpClient.get<Course>(`${environment.baseUrl}/courses/${courseId}`)
        // return of(this.courses.find((c) => c.id === id));
    }
}