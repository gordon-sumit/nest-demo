import {Controller, Post, Body, HttpCode} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {ApiBody} from "@nestjs/swagger";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('/login')
    @HttpCode(202)
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                email: { type: 'string', example: 'wucyva@mailinator.com' },
                password: { type: 'string', example: '123456' },
            },
        },
    })
    async login(@Body() {email, password}) {
        return this.authService.signIn(email, password)
    }

}
