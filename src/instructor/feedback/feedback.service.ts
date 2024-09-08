import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';

@Injectable()
export class FeedbackService {
  private feedbacks = [];

  getAllFeedback() {
    return this.feedbacks;
  }

  getFeedbackById(id: string) {
    return this.feedbacks.find((feedback) => feedback.id === id);
  }

  createFeedback(createFeedbackDto: CreateFeedbackDto) {
    const newFeedback = {
      id: (this.feedbacks.length + 1).toString(),
      ...createFeedbackDto,
    };
    this.feedbacks.push(newFeedback);
    return newFeedback;
  }

  updateFeedback(id: string, updateFeedbackDto: UpdateFeedbackDto) {
    const index = this.feedbacks.findIndex((feedback) => feedback.id === id);
    if (index !== -1) {
      this.feedbacks[index] = {
        ...this.feedbacks[index],
        ...updateFeedbackDto,
      };
      return this.feedbacks[index];
    }
    return null;
  }

  deleteFeedback(id: string) {
    const index = this.feedbacks.findIndex((feedback) => feedback.id === id);
    if (index !== -1) {
      const deletedFeedback = this.feedbacks.splice(index, 1);
      return deletedFeedback[0];
    }
    return null;
  }
}
