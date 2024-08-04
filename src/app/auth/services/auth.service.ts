import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import { User } from '@app/models/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginResponse } from '@app/models/login-response';

const HOST = 'http://localhost:4000';
const LOGIN_URL = `${HOST}/login`;
const LOGOUT_URL = `${HOST}/logout`;
const REGISTER_URL = `${HOST}/register`;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isAuthorized$$ = new BehaviorSubject<boolean>(false);
    public isAuthorized$ = this.isAuthorized$$.asObservable();

    constructor(
        private http: HttpClient,
        private sessionStorageService: SessionStorageService
    ) { 
        this.initAuthContext();
    }

    initAuthContext(): void {
        const token = this.sessionStorageService.getToken();
        
        if (token != null) {
            this.isAuthorised = true;
        }
    }

    login(email: string, password: string): Observable<LoginResponse> {
        const user: User = { email: email, password: password };

        return this.http.post<LoginResponse>(LOGIN_URL, user).pipe(
            tap(success => {
                this.sessionStorageService.setToken(success.result);
                this.isAuthorised = true;
            })
        );
    }

    logout() {
        this.http.delete(LOGOUT_URL).subscribe(() => {
            this.sessionStorageService.deleteToken();
            this.isAuthorised = false;
        });
    }

    register(user: User) {
        this.http.post<LoginResponse>(REGISTER_URL, user).subscribe(success => {
            this.sessionStorageService.setToken(success.result);
            this.isAuthorised = true;
        });
    }

    get isAuthorised(): boolean {
        return this.isAuthorized$$.value;
    }

    set isAuthorised(value: boolean) {
        this.isAuthorized$$.next(value);
    }
}
