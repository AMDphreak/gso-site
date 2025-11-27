export interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  imageUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  ticketUrl?: string;
  imageUrl?: string;
}

export interface Member {
  id: string;
  name: string;
  instrument?: string;
  bio?: string;
  imageUrl?: string;
}

export interface Season {
  id: string;
  name: string;
  year: string;
  events: Event[];
}

