import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { getLocaleMonthNames } from '@angular/common';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  constructor(private _httpService: HttpService){
    // https://valor-software.com/ngx-bootstrap/#/documentation#getting-started
    setTheme('bs4');
  }

  goHome() {
    // navigate to /??
    window.location.href="/Products"; 
  }

  
}
