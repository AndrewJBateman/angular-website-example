import { Injectable } from "@angular/core";
import { Observable, of, from } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { configuration } from "./configuration";
import { environment } from './../environments/environment';

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  config = configuration;
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getConfig() {
    return this.config;
  }

  getSettings(database: string, id?: any): Observable<any[]> {
    let uid = id || null;
    let url: string;
    if (uid !== null) {
      url = `${this.apiUrl}/${database}/${id}`;
      return this.http.get<any>(url).pipe(
        tap((setting) => console.log(setting)),
        catchError(this.handleError(` get for ${database}`, []))
      );
    } else {
      url = `${this.apiUrl}/${database}`;
      return this.http.get<any>(url).pipe(
        map((setting) => setting["records"]),
        catchError(this.handleError(` get for ${database}`, []))
      );
    }
  }
}
