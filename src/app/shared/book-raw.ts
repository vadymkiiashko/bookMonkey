

export interface BookRaw {
  isbn: string;
  title: string;
  authors: string[];
  published: Date;
  subtitle?: string;
  rating?: number;
  thumbnailslist?: ThumbnailRaw[];
  description?: string;
}

export interface ThumbnailRaw {
    url: string;
    title?: string;
  }
  