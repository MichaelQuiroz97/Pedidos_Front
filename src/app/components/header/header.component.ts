import { Component, OnInit } from '@angular/core';
import { TokenDecoderService } from 'src/app/services/Token/token-decoder.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  NombreUsuario!: string;

  constructor(private tokenService: TokenDecoderService) { }

  ngOnInit() {
    this.NombreUsuario = this.tokenService.obtainName();
  }
}
