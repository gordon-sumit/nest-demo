import { AuthService } from "./auth.service";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login({ email, password }: {
        email: any;
        password: any;
    }): Promise<{
        access_token: string;
    }>;
}
