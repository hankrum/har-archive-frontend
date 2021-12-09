import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HarFile } from "../models/harFile";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private SERVER_URL: string = 'https://localhost:55747/api/harfile/harfiles';

    constructor(private http: HttpClient) { }

    public sendFiles(files: HarFile[]): void {
        const httpOptions = {
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Referrer-Policy': 'strict-origin-when-cross-origin' }
        };

        this.http.post<HarFile[]>(this.SERVER_URL, files, httpOptions).subscribe();

    }
}