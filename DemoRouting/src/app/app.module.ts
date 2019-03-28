import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AoboutComponent } from './aobout/aobout.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { HomeChild2Component } from './home-child2/home-child2.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, children: [
    {path: ':id', component: HomeChildComponent,  }
  ]},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AoboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AoboutComponent,
    HomeChildComponent,
    HomeChild2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
