import { TestBed, inject } from '@angular/core/testing';
import { HyperCourseService } from './hyper-course.service';

describe('HyperCourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HyperCourseService]
    });
  });

  it('should ...', inject([HyperCourseService], (service: HyperCourseService) => {
    expect(service).toBeTruthy();
  }));
});
