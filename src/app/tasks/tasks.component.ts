import { Component, OnInit, Input } from '@angular/core';
import { InfoCardsService } from '../info-cards.service';
import { StrapiService } from '../strapi.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {

  @Input() report: any;
  open = null;

  constructor(private infoCards: InfoCardsService, private api: StrapiService) { }

  ngOnInit() {
    this.infoCards.clear();
  }

  restart() {
    this.api.updateReport(Object.assign({}, this.report, {finished_intake: false}))
      .subscribe((report) => {
        this.report = Object.assign(this.report, report);
      });
  }

  toggle(task) {
    this.infoCards.clear();
    if (this.open === task) {
      this.open = null;
    } else {
      this.open = task;
      for (const card of task.card_slugs.split(',')) {
        this.infoCards.appendCard(card);
      }
    }
  }
}