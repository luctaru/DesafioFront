import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatStepperModule,
  MatTabsModule,
  MatSelectModule,
  MatMenuModule,
  MatExpansionModule,
  MatTreeModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { PlanlistComponent } from './components/planlist/planlist.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TableComponent } from './components/table/table.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormdialogComponent } from './components/formdialog/formdialog.component';
import { SettingsbuttonComponent } from './components/planlist/settingsbutton/settingsbutton/settingsbutton.component';
import { PlandialogComponent } from './components/plandialog/plandialog.component';
import { UserdivComponent } from './components/planlist/userdiv/userdiv.component';
import { SubplansComponent } from './components/planlist/subplans/subplans.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlanlistComponent,
    TableComponent,
    DialogComponent,
    FormdialogComponent,
    SettingsbuttonComponent,
    PlandialogComponent,
    UserdivComponent,
    SubplansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatStepperModule,
    MatTabsModule,
    MatSelectModule,
    MatMenuModule,
    MatExpansionModule,
    MatTreeModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [
    DialogComponent,
    FormdialogComponent,
    PlandialogComponent
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
