import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class DiscussionsService {
  private posts = [];

  getAllPosts() {
    return this.posts;
  }

  getPostById(id: string) {
    return this.posts.find((post) => post.id === id);
  }

  createPost(createPostDto: CreatePostDto) {
    const newPost = {
      id: (this.posts.length + 1).toString(),
      ...createPostDto,
    };
    this.posts.push(newPost);
    return newPost;
  }

  updatePost(id: string, updatePostDto: UpdatePostDto) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      this.posts[index] = { ...this.posts[index], ...updatePostDto };
      return this.posts[index];
    }
    return null;
  }

  deletePost(id: string) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      const deletedPost = this.posts.splice(index, 1);
      return deletedPost[0];
    }
    return null;
  }
}
