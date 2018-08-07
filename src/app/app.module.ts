import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'real-estate',
        pathMatch: 'full'
      },
      {
        path: 'real-estate',
        loadChildren: './real-estate/real-estate.module#RealEstateModule'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
