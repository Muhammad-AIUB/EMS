import { Injectable } from '@nestjs/common';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';

@Injectable()
export class SalaryService {
  private salaries = [];

  getAllSalaries() {
    return this.salaries;
  }

  getSalaryById(id: string) {
    return this.salaries.find((salary) => salary.id === id);
  }

  createSalary(createSalaryDto: CreateSalaryDto) {
    const newSalary = {
      id: (this.salaries.length + 1).toString(),
      ...createSalaryDto,
    };
    this.salaries.push(newSalary);
    return newSalary;
  }

  updateSalary(id: string, updateSalaryDto: UpdateSalaryDto) {
    const index = this.salaries.findIndex((salary) => salary.id === id);
    if (index !== -1) {
      this.salaries[index] = { ...this.salaries[index], ...updateSalaryDto };
      return this.salaries[index];
    }
    return null;
  }

  deleteSalary(id: string) {
    const index = this.salaries.findIndex((salary) => salary.id === id);
    if (index !== -1) {
      const deletedSalary = this.salaries.splice(index, 1);
      return deletedSalary[0];
    }
    return null;
  }
}
