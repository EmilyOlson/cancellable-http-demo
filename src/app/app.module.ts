import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { appConfig } from './app.config';
import { DefaultComponent } from './default.component';
import { CancellableHttpComponent } from './components/cancellable-http-demo/cancellable-http-demo.component';
import { ObservableReplayComponent } from './components/observable-replay-demo/observable-replay-demo.component';
import { HomeComponent } from './components/home/home.component'

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    CancellableHttpComponent,
    ObservableReplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot({
      config: appConfig,
    }),
    ReactiveFormsModule,
  ],
  providers: [HttpClient],
  entryComponents: [DefaultComponent, HomeComponent, CancellableHttpComponent, ObservableReplayComponent],
  bootstrap: [UIView]
})
export class AppModule { }
