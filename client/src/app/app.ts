import { HttpClient } from '@angular/common/http';
import { Component, signal, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  private http = inject(HttpClient);
  protected readonly title = signal('DatingApp');
  protected members = signal<any>([]);
  
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: response => this.members.set(response), //next es lo que hara despues de que se complete la request
      error: error => console.log(error),
      complete: () => console.log('Se completo v:')
    })
  }
}
