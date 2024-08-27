import { Controller, Get, Post, Body, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
//  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({description: 'to register a new user with email', summary: 'register a user with email'})
  create(@Body() registerData: RegisterUserDto) {
    return this.authService.register(registerData);
  }

  @Get()
  @ApiOperation({description: 'login with email', summary: 'end point to login with user and password'})
  login(@Body() loginData: LoginDto){
    return this.authService.login(loginData);
  }
  
}
