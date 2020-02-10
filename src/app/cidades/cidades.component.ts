import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})

export class CidadesComponent implements OnInit {
  cidades: any;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getCidades().subscribe(
      (data) => {
        this.cidades = data;
      }
    )
  }

  cadastrarCidade() {
    this.router.navigate(['/cadastro'])
  }

}
