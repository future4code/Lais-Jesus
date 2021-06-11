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

export type userAddress = {
   neighborhood: string
   street: string
   city: string
   state: string
}
