import { TestBed, inject } from '@angular/core/testing';
import { CourseDetailGaurdService } from './course-detail-gaurd.service';

describe('CourseDetailGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseDetailGaurdService]
    });
  });

  it('should ...', inject([CourseDetailGaurdService], (service: CourseDetailGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
