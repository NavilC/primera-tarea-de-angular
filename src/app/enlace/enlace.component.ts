import { Component, OnInit, Input } from '@angular/core';
import { IEnlace } from './IEnlace';

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent implements OnInit {
  @Input() enlace: IEnlace = {
    href: 'https://www.google.com',
    texto: 'Google'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
