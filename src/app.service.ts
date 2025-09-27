import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('Hello World, It Is A Razorpay Practice App.');
    return 'Hello World, It Is A Razorpay Practice App.';
  }
}
