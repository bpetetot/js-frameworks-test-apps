import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { LikeBtnComponent } from './like-btn/like-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    LikeBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
