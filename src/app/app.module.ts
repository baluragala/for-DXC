import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router'
import { appRoutes} from './app.routes'

import {PostsService} from './posts.service';

import {GithubService} from './github.service'
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
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component'
import { CourseDetailGaurdService} from './course-detail-gaurd.service'
import { OfferModule} from './offer/offer.module';
import { AsyncPromisePipeComponent } from './async-promise-pipe.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe.component';
import { GithubUserDetailComponent } from './github-user-detail.component';
import { PostListComponent } from './post-list.component';
import { CreatePostComponent } from './create-post.component'
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CourseComponent,
    ClassroomComponent,
    CourseListComponent,
    CourseListItemComponent,
    MyHighlightDirective,
    EventDirective,
    UnlessDirective,
    CapitalizePipe,
    LifeCycleHooksComponent,
    CourseFormComponent,
    AuthorFormComponent,
    AuthorReactiveFormComponent,
    HomeComponent,
    CourseDetailComponent,
    AsyncPromisePipeComponent,
    AsyncObservablePipeComponent,
    GithubUserDetailComponent,
    PostListComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    OfferModule
  ],
  providers: [CourseDetailGaurdService, GithubService,PostsService,
    {provide:'ENV',useValue:'DEV'},
    {
   provide:CourseService, useFactory:factory,
      deps:['ENV'] 
     }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function factory (env){
      if(env === 'DEV')
       return new CourseWithLoggerService();
      else
         return new HyperCourseService();
      }