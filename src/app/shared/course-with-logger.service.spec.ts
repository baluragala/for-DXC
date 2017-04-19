import { TestBed, inject } from '@angular/core/testing';
import { CourseWithLoggerService } from './course-with-logger.service';

describe('CourseWithLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseWithLoggerService]
    });
  });

  it('should ...', inject([CourseWithLoggerService], (service: CourseWithLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
