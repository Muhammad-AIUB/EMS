import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { QuizzesService } from './quizzes.service';
import { UploadQuizDto } from './dto/upload-quiz.dto';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('quizFile'))
  async uploadQuiz(
    @UploadedFile() file: Express.Multer.File,
    @Body() uploadQuizDto: UploadQuizDto,
  ) {
    return this.quizzesService.uploadQuiz({
      ...uploadQuizDto,
      quizFile: file,
    });
  }
}
