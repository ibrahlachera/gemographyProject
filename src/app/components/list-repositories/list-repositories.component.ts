import { Component, OnInit } from '@angular/core';
import { GithubRepositoriesService } from 'src/app/services/github-repositories.service';
import * as moment from 'moment';

@Component({
  selector: 'app-list-repositories',
  templateUrl: './list-repositories.component.html',
  styleUrls: ['./list-repositories.component.css']
})
export class ListRepositoriesComponent implements OnInit {
listRepositories=[];
pageOfItems: Array<any>;

  constructor(private githubRepositoriesService: GithubRepositoriesService) { }

  ngOnInit() {
    this.listAllRepositories();
  }

  listAllRepositories(){
    this.githubRepositoriesService.getAllRepositories().subscribe((repositories)=>{
        this.listRepositories = repositories.items;
        console.log(this.listRepositories);
        this.listRepositories.forEach((repository)=>{
          let date = new Date();
    let newDate  = moment(date);
    let createdAtDate= moment(repository.created_at);
    repository.created_at = newDate.diff(createdAtDate, 'days');

        })
    })
  }

 
}
