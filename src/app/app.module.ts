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
  MatExpansionModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { PlanlistComponent } from './components/planlist/planlist.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TableComponent } from './components/table/table.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormdialogComponent } from './components/formdialog/formdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlanlistComponent,
    TableComponent,
    DialogComponent,
    FormdialogComponent
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
    MatExpansionModule
  ],
  entryComponents: [
    DialogComponent,
    FormdialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
