import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ComposerComponent } from './core/components/composer/composer.component';
import { InboxComponent } from './core/components/inbox/inbox.component';
import { SentComponent } from './core/components/sent/sent.component'
import { FormsModule , ReactiveFormsModule}   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComposerComponent,
    InboxComponent,
    SentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
