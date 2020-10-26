import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemNumber: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.itemNumber = this.route.snapshot.paramMap.get('id');
  }

}
