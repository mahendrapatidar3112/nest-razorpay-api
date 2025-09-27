import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RazorpayService } from './razorpay.service';
import { CreateRazorpayDto } from './dto/create-razorpay.dto';
import { UpdateRazorpayDto } from './dto/update-razorpay.dto';

@Controller('razorpay')
export class RazorpayController {
  constructor(private readonly razorpayService: RazorpayService) {}

  @Post()
  create(@Body() createRazorpayDto: CreateRazorpayDto) {
    return this.razorpayService.create(createRazorpayDto);
  }

  @Get()
  findAll() {
    return this.razorpayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.razorpayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRazorpayDto: UpdateRazorpayDto) {
    return this.razorpayService.update(+id, updateRazorpayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.razorpayService.remove(+id);
  }
}
