import { Component, OnInit, Input } from '@angular/core';
import { IArticulo } from './IArticulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  @Input() articulo: IArticulo = {
    titulo: '',
    tituloSeccion: '',
    contenido: '',
    enlace: {
      href: '',
      texto: ''
    }
  }

  likes: number = 0;
  menos: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarTitulo(): void{
    this.articulo.titulo = 'Modificado';
  }

  like(): number{
    this.likes = this.likes + 1;
    return this.likes;
  }
  meno(): number{
    this.menos = this.menos + 1;
    return this.menos;
  }
}
