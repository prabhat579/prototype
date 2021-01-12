import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { MatBadgeModule, MatBottomSheetModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSnackBarModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { HomeComponent } from './component/home/home.component';
import { ResentPostComponent } from './component/resent-post/resent-post.component';
import { ResentPagesComponent } from './component/resent-pages/resent-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    ResentPostComponent,
    ResentPagesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatInputModule,MatButtonModule,
    HttpClientModule,
    MatButtonModule,MatDividerModule,MatCheckboxModule,
    MatCardModule,MatBadgeModule,MatTabsModule,MatProgressSpinnerModule,
    MatToolbarModule,MatBottomSheetModule,MatStepperModule,MatDatepickerModule,
    MatFormFieldModule,MatRadioModule,MatMenuModule, 
    MatInputModule,MatChipsModule,MatDialogModule, MatSnackBarModule,
    MatTableModule,MatProgressBarModule,
    MatPaginatorModule,MatSelectModule,
    MatRippleModule, MatIconModule,MatGridListModule,
    MatSidenavModule,MatListModule,MatTooltipModule,MatTreeModule,MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
