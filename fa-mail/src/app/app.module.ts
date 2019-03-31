import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { FolderListComponent } from './folder-list/folder-list.component';
import { MailListComponent } from './mail-list/mail-list.component';

import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
{path: '', redirectTo: 'messages', pathMatch: 'full'},
{path: 'messages', component: FolderListComponent, children: [
{path: ':name', component: MailListComponent}
]}
];
@NgModule({
  declarations: [
    AppComponent,
    FolderListComponent,
    MailListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
