import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {CareerService} from '../services/career.service';
import {CareerResultComponent} from './career-result/career-result.component';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  @ViewChild('target', {read: ViewContainerRef}) target: any;

  cmpArray: Array<any> = [];
  cmpRefArray: Array<any> = [];
  noResult: boolean = false;

  constructor(public careerService: CareerService,
              private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  onSearch(input) {
    const title = input.value || input.placeholder;

    this.careerService.getJobs(title)
      .subscribe((response) => {
        console.log(response);
          this.onSearchResultsComplete(response);
        },
        error => console.error(error)
      );
  }

  onSearchResultsComplete(response) {
    for (const i of this.cmpRefArray) {
      i.destroy();
    }

    if (response.jobs == undefined) {
      this.noResult = true;
    } else {
      this.noResult = false;

      for (let i = 0; i < response.jobs.length; i++) {
        const c = response.jobs[i].company;
        const t = response.jobs[i].title;
        const d = response.jobs[i].description;
        const l = response.jobs[i].url;

        this.createComponent(c, t, d, l);
      }
    }
  }

  createComponent(c: string, t: string, d: string, l: string) {
    const newComp = this.resolver.resolveComponentFactory(CareerResultComponent);
    const cmpRef = this.target.createComponent(newComp);

    const cmp        = cmpRef.instance;
    cmp.company      = c;
    cmp.title        = t;
    cmp.description  = d;
    cmp.url          = l;

    this.cmpRefArray.push(cmpRef);
    this.cmpArray.push(cmp);
  }

}
