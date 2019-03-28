import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestExampleComponent } from './test-example/test-example.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes/heroes.module';
import { AbcComponent } from './abc/abc.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeChildComponent } from './home-child/home-child.component';

// const appRoutes: Routes = [
// { path: 'child', component: ChildComponentComponent },
// {path : 'test', component: TestExampleComponent},
// { path: 'crisis-center', component: CrisisListComponent },
// { path: 'heroes', component: HeroListComponent },
// { path: '**', component: PageNotFoundComponent }
// { path: 'hero/:id',      component: HeroDetailComponent },
// {
//   path: 'heroes',
//   component: HeroListComponent,
//   data: { title: 'Heroes List' }
// },
// { path: '',
//   redirectTo: '/heroes',
//   pathMatch: 'full'
// },
// { path: '**', component: PageNotFoundComponent }
// ];
const route: Routes = [
  { path: 'home', component: HomeComponent, children: [
    {path: ':id', component: HomeChildComponent}
  ] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path: '**', component: PageNotFoundComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    TestExampleComponent,
    ChildComponentComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent,
    AbcComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    HomeChildComponent
  ],
  imports: [
    BrowserModule,
    //   RouterModule.forRoot([
    //     {
    //        path: 'child',
    //        component: ChildComponentComponent
    //     }
    //  ])
    RouterModule.forRoot(route),
    HeroesModule // Enable tracing for debugging purposes only
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
