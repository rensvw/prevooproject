import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data = [
    {
      'product': 'Ster',
      'dikte': '10mm',
      'formaat': 'klein',
      'materiaal': `mdf`,
      'opties': ['Gat','balkje'],
      'kleur': 'groen',
      'datumKlaar': Date.now(),
      'naamKlant': 'Rens'
    },
    {
      'product': 'Ster',
      'dikte': '10mm',
      'formaat': 'klein',
      'materiaal': `mdf`,
      'opties': ['Gat','balkje'],
      'kleur': 'groen',
      'datumKlaar': Date.now()-1,
      'naamKlant': 'Rens'
    },
    {
      'product': 'Ster',
      'dikte': '10mm',
      'formaat': 'klein',
      'materiaal': `mdf`,
      'opties': ['Gat','balkje'],
      'kleur': 'groen',
      'datumKlaar': Date.now(),
      'naamKlant': 'Rens'
    }
  ];

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
