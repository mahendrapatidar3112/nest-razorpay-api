import { Injectable } from '@nestjs/common';
import { CreateRazorpayDto } from './dto/create-razorpay.dto';
import { UpdateRazorpayDto } from './dto/update-razorpay.dto';

@Injectable()
export class RazorpayService {
  create(createRazorpayDto: CreateRazorpayDto) {
    return 'This action adds a new razorpay';
  }

  findAll() {
    return `This action returns all razorpay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} razorpay`;
  }

  update(id: number, updateRazorpayDto: UpdateRazorpayDto) {
    return `This action updates a #${id} razorpay`;
  }

  remove(id: number) {
    return `This action removes a #${id} razorpay`;
  }
}
