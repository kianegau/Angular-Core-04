import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { FolderListComponent } from './folder-list/folder-list.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MailService } from './common/mail-service/mail.service';
import { FolderService } from './common/folder-service/folder.service';
import { ContentMailComponent } from './content-mail/content-mail.component';

const route: Routes = [
{path: '', redirectTo: 'messages', pathMatch: 'full' },
{path: 'messages', component: FolderListComponent, children:
[
  {path: ':name', component: MailListComponent},
  {path: ':id', component: ContentMailComponent, outlet: 'content'}
]}
];
@NgModule({
  declarations: [
    AppComponent,
    FolderListComponent,
    MailListComponent,
    ContentMailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [MailService, FolderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
