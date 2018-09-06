import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h2>department-list works!</h2>
    <ul class="items">
      <li (click)="onSelect(dept)" [class.selected]="isSelected(dept)" *ngFor="let dept of departments">
        <button>{{ dept.id }} {{ dept .name }}</button>
        <!-- <span class="badge">{{ dept.id }}</span> {{ dept.name }} -->
      </li>
    </ul>

  `,
  styles: [`
    ul {
      list-style-type: none;
    }

    `
  ]
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"},
  ]

  public selectedId;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(dept){
    //this.router.navigate(['/departments', dept.id])
    this.router.navigate([dept.id], {relativeTo: this.activatedRouter});
  }

  isSelected(dept){
    console.log ("selectedId: " + this.selectedId );
    return dept.id === this.selectedId;
  }
}
