import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { RouterModule} from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'offers', component:OfferListComponent},
      {path:'offers/detail', component:OfferDetailComponent},
    ])
  ],
  declarations: [OfferListComponent, OfferDetailComponent]
})
export class OfferModule { }
