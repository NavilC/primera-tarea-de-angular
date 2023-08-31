import { Component } from '@angular/core';
import { IArticulo } from './articulo/IArticulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title(title: any) {
      throw new Error('Method not implemented.');
    }
    articulos: IArticulo[] = [
      {
        titulo: 'FC barcelona',
        tituloSeccion: 'Barca',
        contenido: 'El Fútbol Club Barcelona, conocido popularmente como Barça, ​ es una entidad polideportiva con sede en Barcelona, Cataluña, España. Fue fundado como club de fútbol el 29 de noviembre de 1899 y registrado oficialmente el 5 de enero de 1903.',
        enlace: {
          href: 'https://www.fcbarcelona.es/es/',
          texto: 'Barca'
        }
      },
      {
        titulo: 'FC Real Madrid',
        tituloSeccion: 'Los merengues',
        contenido: 'El Real Madrid Club de Fútbol, más conocido simplemente como Real Madrid, es una entidad polideportiva con sede en Madrid, España. Fue oficialmente registrada como club de fútbol por sus socios el 6 de marzo de 1902 con el objeto de la práctica y desarrollo de este deporte, si bien sus orígenes datan del año 1900.',
        enlace: {
          href: 'https://www.realmadrid.com/',
          texto: 'Merengue'
        }
      },
      {
        titulo: 'Juventus de Turín',
        tituloSeccion: 'Juventus',
        contenido: 'La Juventus de Turín​, conocida simplemente como Juventus o simplificado en Juve, ​ es un club de fútbol italiano con sede en la ciudad de Turín, capital de la región del Piamonte. Fue fundado el 1 de noviembre de 1897 con el nombre de «Sport Club Juventus» por un grupo de estudiantes locales',
        enlace: {
          href: 'https://www.juventus.com/en',
          texto: 'Juve'
        }
      },
      {
        titulo: 'Ajax de Ámsterdam',
        tituloSeccion: 'A. F. C. Ajax',
        contenido: 'El Amsterdamsche Football Club Ajax, simplemente conocido como A. F. C. Ajax, Ajax de Ámsterdam, o más popularmente Ajax, ​ es un club de fútbol con sede en Ámsterdam, Países Bajos.',
        enlace: {
          href: 'https://spanish.ajax.nl/',
          texto: 'Ajax'
        }
      },
      {
        titulo: 'Bayern de Múnich',
        tituloSeccion: 'simplemente Bayern',
        contenido: 'El Bayern de Múnich​​​, o simplemente Bayern, es una entidad deportiva profesional de la ciudad de Múnich, Alemania. Fue fundado el 27 de febrero de 1900 por once jugadores liderados por Franz John.​',
        enlace: {
          href: 'https://fcbayern.com/es',
          texto: 'Bayer'
        }
      }
    ]
}
