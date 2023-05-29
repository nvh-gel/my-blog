export interface BookReviewData {
  id: number;
  title: string;
  img: string;
  description: string;
  publishedDate: Date;
  completedDate: Date;
  review: string;
  others: PublicReview[];
}

interface PublicReview {
  id: number;
  review: string;
  author: string;
}
