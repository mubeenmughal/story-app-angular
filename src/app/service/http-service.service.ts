import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class apiService {
  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http.get(`${environment.baseUrl}${environment.data}`);
  }

  getDataById(id: any) {
    return this.http.get(`${environment.baseUrl}${environment.data}/${id}`);
  }

  postNewData(obj: any) {
    const { img, avatar, name, userName, description } = obj;
    return this.http.post(`${environment.baseUrl}${environment.data}`, obj);
  }

  deleteDataById(id: number) {
    return this.http.delete(`${environment.baseUrl}${environment.data}/${id}`);
  }

  updateLike(id: number, value: number) {
    return this.http.patch(`${environment.baseUrl}${environment.data}/${id}`, {
      like: value,
    });
  }

  updateData(obj: any) {
    return this.http.patch(
      `${environment.baseUrl}${environment.data}/${obj.id}`,
      obj
    );
  }

  getfakeImageApi() {
    return this.http.get(`https://picsum.photos/v2/list?page=2&limit=100`);
  }

  register(obj: any) {
    return this.http.post(`${environment.baseUrl}${environment.users}/`, obj);
  }
}
