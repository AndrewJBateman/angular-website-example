export class Post {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public publishdate: string,
    public excert: string,
    public image?: string
  ) {}
}
