export enum USER_ROLE {
   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
}

export type user = {
   id: string
   email: string
   password: string
   name: string
   role: string
}

export type recipe = {
   id: string,
   title: string,
   description: string,
}