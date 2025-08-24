import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwt;
    constructor(usersService: UsersService, jwt: JwtService);
    signUp(email: string, password: string): Promise<{
        access_token: string;
    }>;
    signIn(email: string, password: string): Promise<{
        access_token: string;
    }>;
    private signToken;
}
