
import { AppComponent } from './app.component';
import {HelloComponent} from './hello.component';
import { CourseComponent } from './course/course.component';
import { ClassroomComponent } from './classroom.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { MyHighlightDirective } from './my-highlight.directive'
import { EventDirective } from './event-directive';
import { UnlessDirective } from './shared/unless.directive';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component'
import {CourseService} from './shared/course.service'
import {HyperCourseService} from './shared/hyper-course.service'
import {CourseWithLoggerService} from './shared/course-with-logger.service';
import { CourseFormComponent } from './course-form/course-form.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { AuthorReactiveFormComponent } from './author-reactive-form/author-reactive-form.component';
import { HomeComponent } from './home/home.component'
import { CourseDetailComponent } from './course-detail/course-detail.component'
import { CourseDetailGaurdService} from './course-detail-gaurd.service'

export const appRoutes = [
    {path:'home', component:HomeComponent},
      {path:'courses', children:[
          {path:'', component:CourseListComponent},
          {path:'create', component:CourseFormComponent},
          {path:'detail/:id/section/:sid', component:CourseDetailComponent,canActivate:[CourseDetailGaurdService] }
      ]},
      {path:'author', component:AuthorFormComponent},
      {path:'', redirectTo:'home', pathMatch:"full"},
       {path:'**', redirectTo:'home', pathMatch:"full"}
]