import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HarFile } from "../models/harFile";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private SERVER_URL: string = 'https://localhost:8081/api';
    private HAR_FILE_ROUTE: string = 'harfile';
    private FILES_ROUTE: string = 'harfiles';
    private LOGIN_ROUTE: string = 'auth/login';

    private harFiles: HarFile[] = [];

    constructor(private http: HttpClient) { }

    public sendFiles(files: HarFile[]): void {
        const httpOptions = {
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        };

        const postFilesUrl = `${this.SERVER_URL}/${this.HAR_FILE_ROUTE}/${this.FILES_ROUTE}`;
        this.http.post<HarFile[]>(postFilesUrl, files, httpOptions).subscribe();

    }

    public getFilesByPath(path: string): Observable<HarFile[]> {
        const params = new HttpParams().set('path', path);

        const getFilesUrl = `${this.SERVER_URL}/${this.HAR_FILE_ROUTE}`;

        return this.http.get<HarFile[]>(getFilesUrl, { params: params });
    }

    public login(credentialsJson: string) {

        const loginUrl = `${this.SERVER_URL}/${this.LOGIN_ROUTE}`;

        return this.http.post(loginUrl, credentialsJson, {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        });

    }
}