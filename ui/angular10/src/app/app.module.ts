import { SharedService } from './shared.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyComponent } from './family/family.component';
import { ShowFamComponent } from './family/show-fam/show-fam.component';
import { AddEditComponent } from './family/add-edit/add-edit.component';
import { OrphanComponent } from './orphan/orphan.component';
import { ShowOrphComponent } from './orphan/show-orph/show-orph.component';
import { AddEditOrphComponent } from './orphan/add-edit-orph/add-edit-orph.component';
import { SubsidyComponent } from './subsidy/subsidy.component';
import { ShowSubComponent } from './subsidy/show-sub/show-sub.component';
import { AddEditSubComponent } from './subsidy/add-edit-sub/add-edit-sub.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoreInfoComponent } from './family/more-info/more-info.component';
import { MoreInfoOrphanComponent } from './orphan/more-info-orphan/more-info-orphan.component';
import { InfoSubComponent } from './subsidy/info-sub/info-sub.component';
import { ExportAsModule } from 'ngx-export-as';
//Angular Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { AddOrphanEducationComponent } from './orphan/add-orphan-education/add-orphan-education.component';
import { EditOrphEducationComponent } from './orphan/edit-orph-education/edit-orph-education.component';
import { AddEditFamilySubsidyComponent } from './subsidy/add-edit-family-subsidy/add-edit-family-subsidy.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    ShowFamComponent,
    AddEditComponent,
    OrphanComponent,
    ShowOrphComponent,
    AddEditOrphComponent,
    SubsidyComponent,
    ShowSubComponent,
    AddEditSubComponent,
    MoreInfoComponent,
    MoreInfoOrphanComponent,
    InfoSubComponent,
    NavComponent,
    HomeComponent,
    AddOrphanEducationComponent,
    EditOrphEducationComponent,
    AddEditFamilySubsidyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ExportAsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    LayoutModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
