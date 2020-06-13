import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultingDetailComponent } from './consulting-detail/consulting-detail.component';
import { ConsultingListComponent } from './consulting-list/consulting-list.component';
import { DialogComponent } from './dialog/dialog.component';
import { DrawerMenuComponent } from './drawer-menu/drawer-menu.component';
import { FabComponent } from './fab/fab.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { ConsultantComponent } from './consultant/consultant.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultingListComponent,
    FabComponent,
    ConsultingDetailComponent,
    DialogComponent,
    DrawerMenuComponent,
    NavbarComponent,
    ConsultationsComponent,
    ConsultantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
