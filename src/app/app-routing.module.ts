import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultingDetailComponent } from './consulting-detail/consulting-detail.component';
import { ConsultingListComponent } from './consulting-list/consulting-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'detail/:id', component: ConsultingDetailComponent },
  { path: 'list', component: ConsultingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
