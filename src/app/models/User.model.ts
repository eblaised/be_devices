export class User{
  constructor(public firstName:string,
              public lastName: string,
              public email: string,
              //drink preference(coca or water ...)
              public drinkPreference: string,
              //optional
              public hobbies?: string[]) {}

}
