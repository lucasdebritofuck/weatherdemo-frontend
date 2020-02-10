import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onClickSubmit(formData: any) {
    this.apiService.insertCidade(formData).subscribe(
      () => this.router.navigate(['/cidades'])
    );
  }

}
