import { Injectable } from "@angular/core";
import { configuration } from "./configuration";
import { Observable, of, from } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { IFooter } from "src/app/footer/footer";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  config = configuration;
  apiUrl = "api/posts";

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

  getSettings(database: string, id?: number): Observable<any> {
    let uid = id || null;
    let url: string;
    if (uid !== null) {
      url = `api/${database}/${id}`;
    } else {
      url = `api/${database}`;
    }
    return this.http.get<any>(url).pipe(
      // tap((setting) => console.log('setting: ', setting)),
      catchError(this.handleError(`get for ${database}`, []))
    );
  }
}
