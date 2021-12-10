import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from './services/apiservice.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    invalidLogin!: boolean;

    constructor(private jwtHelper: JwtHelperService, 
        private router: Router, 
        private http: ApiService) { }

    login(form: NgForm) {
        const credentials = JSON.stringify(form.value);
        this.http.login(credentials)
            .subscribe(response => {
                const token = (<any>response).token;
                localStorage.setItem("jwt", token);
                this.invalidLogin = false;
                this.router.navigate(["/"]);
            }, err => {
                this.invalidLogin = true;
            });
    }

    logOut() {
        localStorage.removeItem("jwt");
    }

    isUserAuthenticated() {
        const token: string | null = localStorage.getItem("jwt");
        const isAuthenticated = !!token && !this.jwtHelper.isTokenExpired(token);

        return isAuthenticated;
    }
}