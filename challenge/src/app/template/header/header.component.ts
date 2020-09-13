import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './../../services/header/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, 
              private headerService:HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string{
    return this.headerService.headerData.title
  }

  get icon(): string{
    return this.headerService.headerData.icon
  }

  get routUrl():string{
    return this.headerService.headerData.routUrl
  }

}