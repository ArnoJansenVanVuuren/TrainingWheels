export interface JokeI {
  error: boolean;
  category: string;
  type: string;
  joke?: string;
  setup?: string;
  delivery?: string;
  flags: string[];
  safe: boolean;
  id: number;
  lang: string;
}
