import { Component, OnInit } from '@angular/core';
import { FolderService } from '../common/folder-service/folder.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  public folderLists = [];
  constructor(private folderService: FolderService, private route: Router) { }

  ngOnInit() {
    this.folderService.getFolders().subscribe( data => {
      this.folderLists = data;
      console.log(this.folderLists);
    });
  }

}
