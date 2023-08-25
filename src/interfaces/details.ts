export interface Details {
  image: string;
  name: string;
  status: string;
  type: string | null;
  species: string;
  location: { name: string; url: string };
  episode: Array<string>;
}
