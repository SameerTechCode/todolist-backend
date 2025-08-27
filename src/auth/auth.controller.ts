
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('signup')
  signUp(@Body() dto: SignUpDto) {
     console.log('Signup request received:', dto);
    return this.auth.signUp(dto.email, dto.password);
  }

  @Post('signin')
  signIn(@Body() dto: SignInDto) {
     console.log('Signin request received:', dto);
    return this.auth.signIn(dto.email, dto.password);
  }
}
