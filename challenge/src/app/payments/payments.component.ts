import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header/header.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private headerService:HeaderService) { 
    headerService.headerData = {
      title: 'Payments',
      icon: 'add_task',
      routUrl: '/payments'
    }
  }

  ngOnInit(): void {
  }

}
