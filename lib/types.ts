export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  audioUrl?: string;
}

export interface UserContext {
  name: string;
  about: string;
  createdAt: string;
}