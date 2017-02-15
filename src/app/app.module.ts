import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { ListComponent } from './Component/list/list.component';
import { TemplateLoderDirective } from './Component/template-loder.directive';
import { TestPipePipe } from './Component/test-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ListComponent,
    TemplateLoderDirective,
    TestPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2ImageGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
