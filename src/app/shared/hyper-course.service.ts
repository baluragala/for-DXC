import { Injectable } from '@angular/core';
import { IService } from './IService'

@Injectable()
export class HyperCourseService implements IService{

  constructor() { }

    getCourses():any{
    return [
      {id:1, title:'Android Programming', author:'James'},
      {id:2, title:'Angular Programming', author:'Kelly'},
      {id:3, title:'React Programming', author:'Thomson'},
      {id:1, title:'Android Programming', author:'James'},
      {id:2, title:'Angular Programming', author:'Kelly'},
      {id:3, title:'React Programming', author:'Thomson'},
      {id:1, title:'Android Programming', author:'James'},
      {id:2, title:'Angular Programming', author:'Kelly'},
      {id:3, title:'React Programming', author:'Thomson'}
  ]
  }

}
