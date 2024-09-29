export interface UserInfo {
    _id: string;
    username: string | null; // Permitir que sea null
    name: string;
    bio: string;
    image: string;
    onboarded: boolean;
  }
  