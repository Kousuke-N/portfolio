import { Component, OnInit } from '@angular/core';
import { Work } from '@/models';
import { WorkService } from '@/services';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss']
})
export class WorksListComponent implements OnInit {
  works: Work[]

  constructor(private workService: WorkService) {
    this.works = this.workService.fetchWorks();
  }

  ngOnInit(): void {
  }

}
