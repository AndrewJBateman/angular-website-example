import { Injectable } from "@angular/core";
import { configuration } from "./configuration";
import { Observable, of, from } from "rxjs";
import { Post } from "../blog/Post";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { PostBlockComponent } from "../blog/post-block/post-block.component";
import { environment } from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  config = configuration;
  apiUrl = environment.apiUrl;
  emailUrl = environment.emailUrl;

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getConfig() {
    return this.config;
  }

  sendMessage(formData: NgForm): Observable<any> {
    return this.http.post<any>(`${this.emailUrl}`, formData, httpOptions).pipe(
      tap((message) => console.log(message)),
      catchError(this.handleError("Sending Message", []))
    );
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<any>(`${this.apiUrl}/posts`).pipe(
      tap((post) => console.log(post)),
      catchError(this.handleError("Get Posts", []))
    );
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

  updatePost(formData: NgForm): Observable<Post> {
    return this.http
      .put<any>(`${this.apiUrl}/posts`, formData, httpOptions)
      .pipe(
        tap((post) => console.log(post)),
        catchError(this.handleError("Update Post", []))
      );
  }

  addPost(formData: NgForm): Observable<PostBlockComponent> {
    return this.http
      .post<any>(`${this.apiUrl}/posts`, formData, httpOptions)
      .pipe(
        tap((post) => console.log(post)),
        catchError(this.handleError("Add New Post", []))
      );
  }

  getPostByID(id: number) {
    return this.http.get<any>(`${this.apiUrl}/posts/${id}`).pipe(
      tap((post) => console.log(post)),
      catchError(this.handleError("Get Post by ID", []))
    );
  }
}
