import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import { HeroListComponent } from '../hero-list/hero-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AbcComponent } from '../abc/abc.component';
import { ChildComponentComponent } from '../child-component/child-component.component';
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent, children: [
    {path: 'abc', component: AbcComponent, outlet: 'abcoutlet'}
  ] },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'child', component: ChildComponentComponent, },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
