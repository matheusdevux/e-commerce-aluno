import { Component } from '@angular/core';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule, MatAnchor } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { AuthFacade } from '../../../core/facades/auth.facade';
import { CarrinhoFacade } from '../../../core/facades/carrinho.facade';
@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatAnchor, RouterLink, UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = 'Mercado Liso';
  private carrinhoFacade = inject(CarrinhoFacade);
  quantidadeHeader = this.carrinhoFacade.quantidadeCarrinho;

  private authFacade = inject(AuthFacade);
  usuarioLogado = this.authFacade.usuarioLogado;
  usuarioAtual = this.authFacade.usuarioAtual;

  private router = inject(Router);

  sair(){
    this.authFacade.sair();
    this.router.navigateByUrl('/login');
  }
}
