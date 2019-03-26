import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { tap, delay, take, map } from 'rxjs/operators';
import { User } from '../../interface/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly API = `${environment.API}`;

  constructor(private http: HttpClient) {}

  list(type) {
    if (type === 'users') {
      return this.http.get<User[]>(`${this.API}/${type}`);
    } else {
      return this.http.get<User[]>(`${this.API}/${type}`);
    }
  }

  getOne(e, type) {
    if (type === 'users') {
      return this.http.get<User>(`${this.API}/${type}/${e.id}`).pipe(take(1));
    } else {
      return this.http.get<User>(`${this.API}/${type}/${e.id}`).pipe(take(1));
    }
  }

  update(d, type) {
    let body;
    if (type === 'types') {
      body = {
        id: d.id,
        name: d.name,
        description: d.description
      };
    } else {
      body = {
        id: d.id,
        name: d.name,
        email: d.email
      };
    }
    return this.http.put(`${this.API}/${type}/${d.id}`, body).pipe(take(1));
  }

  insert(d, type) {
    let body;
    if (type === 'types') {
      body = {
        name: d.name,
        description: d.description
      };
    } else {
      body = {
        name: d.name,
        email: d.email
      };
    }
    return this.http.post(`${this.API}/${type}`, body).pipe(take(1));
  }

  delete(type, id) {
    return this.http.delete<User>(`${this.API}/${type}/${id}`).pipe(take(1));
  }
}
