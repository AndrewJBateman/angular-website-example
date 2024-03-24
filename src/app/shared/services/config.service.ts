/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { configuration } from './configuration';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ConfigService {
	readonly config = configuration;
	readonly apiUrl = 'api/posts';

	constructor(private http: HttpClient) {}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: Error): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}

	getConfig() {
		return this.config;
	}

	getSettings(database: string, id?: number): Observable<any> {
		const url = id ? `api/${database}/${id}` : `api/${database}`;
		return this.http
			.get<any>(url)
			.pipe(
				catchError(this.handleError(`Error getting data from ${database}`, []))
			);
	}
}
