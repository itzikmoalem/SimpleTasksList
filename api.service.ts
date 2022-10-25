import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Task } from './module';

// change the localhost address by your port:
const apiURL = 'https://localhost:44305';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(private http: HttpClient) { }

    public getAllTasks(): Observable<any> {
        return this.http.get<any>(apiURL + '/api/home/');
    }

    public setTask(t: Task): Observable<any> {
        var jsn = { id: t.id, task: t.task};
        return this.http.post<any>(apiURL + '/api/home/', jsn);
    }

    public deleteTask(id: number): Observable<string> {
        return this.http.get<string>(apiURL + '/api/home/' + id);
    }
}
