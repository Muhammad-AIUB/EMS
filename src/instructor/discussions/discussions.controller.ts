import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { DiscussionsService } from './discussions.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('discussions')
export class DiscussionsController {
  constructor(private readonly discussionsService: DiscussionsService) {}

  @Get()
  getAllPosts() {
    return this.discussionsService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.discussionsService.getPostById(id);
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.discussionsService.createPost(createPostDto);
  }

  @Put(':id')
  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.discussionsService.updatePost(id, updatePostDto);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.discussionsService.deletePost(id);
  }
}
