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

  // update(d, bool) {
  //   const body = {
  //     firstName: d.firstName,
  //     lastName: d.lastName,
  //     email: d.email,
  //     gender: d.gender,
  //     isFavorite: bool,
  //     company: d.info.company,
  //     avatar: d.info.avatar,
  //     address: d.info.address,
  //     phone: d.info.phone,
  //     comments: d.info.comments
  //   };
  //   return this.http.put(`${this.API}/${d.id}`, body).pipe(take(1));
  // }

  // insert(d) {
  //   const body = {
  //     firstName: d.firstName,
  //     lastName: d.lastName,
  //     email: d.email,
  //     gender: d.gender,
  //     isFavorite: d.isFavorite,
  //     company: d.info.company,
  //     avatar: d.info.avatar,
  //     address: d.info.address,
  //     phone: d.info.phone,
  //     comments: d.info.comments
  //   };
  //   return this.http.post(`${this.API}`, body).pipe(take(1));
  // }

  delete(type, id) {
    return this.http.delete<User>(`${this.API}/${type}/${id}`).pipe(take(1));
  }
}
