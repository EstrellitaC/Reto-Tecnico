import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  paises:any = []
  constructor(private apiservice:ApiService){}
  ngOnInit () {
    const query = `
      {
        countries {
          name
          continent {
            name
          }
        }
      }
    `;
    this.apiservice.getpaises(query).subscribe(
      (result:any) => { 
        this.paises = result.data.countries;
        console.log('resultado:', result.data)
      }
    );
  }
  
}
