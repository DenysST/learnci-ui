import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  apiUrl = "http://localhost:8080/users"
  title = 'learnci-ui';
  content = ''

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.httpClient.get(this.apiUrl).subscribe(res => {
      this.content = JSON.stringify(res)
    })
  }

}
