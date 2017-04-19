import { Injectable } from '@angular/core';
import { IService} from './IService'

@Injectable()
export class CourseWithLoggerService implements IService {

  constructor() { }

   getCourses():any{
     console.log('Get courses called..')
     let c=[
    {id:1, title:'Android Programming', author:'James'},
    {id:2, title:'Angular Programming', author:'Kelly'},
    {id:3, title:'React Programming', author:'Thomson'}
  ]
     console.log('Courses Returned : ' + c.length)
    return c
  }

}
