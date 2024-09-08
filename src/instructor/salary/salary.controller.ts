import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { SalaryService } from './salary.service';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';

@Controller('salary')
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) {}

  @Get()
  getAllSalaries() {
    return this.salaryService.getAllSalaries();
  }

  @Get(':id')
  getSalaryById(@Param('id') id: string) {
    return this.salaryService.getSalaryById(id);
  }

  @Post()
  createSalary(@Body() createSalaryDto: CreateSalaryDto) {
    return this.salaryService.createSalary(createSalaryDto);
  }

  @Put(':id')
  updateSalary(
    @Param('id') id: string,
    @Body() updateSalaryDto: UpdateSalaryDto,
  ) {
    return this.salaryService.updateSalary(id, updateSalaryDto);
  }

  @Delete(':id')
  deleteSalary(@Param('id') id: string) {
    return this.salaryService.deleteSalary(id);
  }
}
