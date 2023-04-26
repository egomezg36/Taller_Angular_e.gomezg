export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  webpage: string;
  poster: string;

  constructor(
    id: number,
    name: string,
    channel: string,
    seasons: number,
    description: string,
    webpage: string,
    poster: string
  ) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
    this.webpage = webpage;
    this.poster = poster;
  }

  static fromJson(json: any): Serie {
    return new Serie(
      json.id,
      json.name,
      json.channel,
      json.seasons,
      json.description,
      json.webpage,
      json.poster
    );
  }

  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      channel: this.channel,
      seasons: this.seasons,
      description: this.description,
      webpage: this.webpage,
      poster: this.poster
    };
  }
}

