import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultantComponent } from './consultant/consultant.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { ConsultingDetailComponent } from './consulting-detail/consulting-detail.component';
import { ConsultingListComponent } from './consulting-list/consulting-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'detail/:id', component: ConsultingDetailComponent },
  { path: 'list', component: ConsultingListComponent },
  { path: 'consultations', component: ConsultationsComponent },
  { path: 'consultant', component: ConsultantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
