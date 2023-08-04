
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async generateToken(userId: string ): Promise<string> {
    const payload = { sub: userId };
    return this.jwtService.signAsync(payload);
    
  }

  async validateUser(userId: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    return !!user;
  }

  async decoded(payload) {
    const secretKey = process.env.JWT_SECRET
    const [scheme, jwtToken] = payload.split(' ')

    const token = jwt.verify(jwtToken, secretKey)
    return token.sub
}   
}