import { Component } from '@angular/core';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule, MatAnchor } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { CarrinhoService } from '../../../core/services/carrinho.service';
import { inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatAnchor, RouterLink, UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = 'Mercado Liso';
  private carrinhoService = inject(CarrinhoService);
  quantidadeHeader = this.carrinhoService.quantidadeItens;

  private authService = inject(AuthService);
  usuarioLogado = this.authService.usuarioLogado;
  usuarioAtual = this.authService.usuarioAtual;

  private router = inject(Router);

  sair(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
