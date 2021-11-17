import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-card',
  templateUrl: './orders-card.component.html',
  styleUrls: ['./orders-card.component.scss'],
})
export class OrdersCardComponent implements OnInit {
  constructor() {
    this.order = [];
  }
  showChangeCard: boolean = true;
  ngOnInit(): void {}
  @Input() order: any;
  changeCard() {
    this.showChangeCard = !this.showChangeCard;
  }
}
