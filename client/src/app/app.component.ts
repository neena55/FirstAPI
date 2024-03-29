import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Friendship app';
  users: any;
  constructor (private http: HttpClient) {}
    
  ngOnInit(): void {
    this.http.get('http://localhost:5001/api/users').subscribe(
      {
        next: Response => this.users = Response,
        error: error => console.log(error),
        complete: () => console.log ('Request has been completed')
      }


    )
  }
}
