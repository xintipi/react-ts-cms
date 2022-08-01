export interface ProfileTransfer {
  body: string;
  id: number;
  title: string;
  userId: number;
}

class Profile {
  private body: string;
  private id: number;
  private title: string;
  private userId: number;

  constructor({ body, id, title, userId }: ProfileTransfer) {
    this.body = body;
    this.id = id;
    this.title = title;
    this.userId = userId;
  }
}

export default Profile;
