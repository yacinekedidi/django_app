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
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MoreInfoComponent } from './family/more-info/more-info.component';
import { MoreInfoOrphanComponent } from './orphan/more-info-orphan/more-info-orphan.component';
import { InfoSubComponent } from './subsidy/info-sub/info-sub.component';
import { ExportAsModule } from 'ngx-export-as';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    InfoSubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ExportAsModule,
    BrowserAnimationsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
