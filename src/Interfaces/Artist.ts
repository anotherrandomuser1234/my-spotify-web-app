interface Artist {
    id: number;
    name: string;
    followers: {
      href: string,
      total: number
    };
    images: [];
  }

export default interface Artists {
  artists: Artist[];
}