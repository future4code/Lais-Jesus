export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role: string
}

export enum ROLE{
   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
}