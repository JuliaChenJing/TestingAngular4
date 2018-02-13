import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LikeComponent } from './2- like-component/like.component'
import { VoterComponent} from './3- voter-component/voter.component'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    VoterComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
