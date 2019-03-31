import { Component, OnInit } from '@angular/core';
import { FolderService } from '../folder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  public folderlists = [];
  constructor(private folderService: FolderService, private routesFolder: Router) { }

  ngOnInit() {
  this.folderService.getFolders().subscribe( data => {
    this.folderlists = data;
    console.log(this.folderlists);
  });
  }

}
