import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onNavigate(page: string) {
    this.navigate.emit(page);
  }
}
