import { Component, OnInit } from '@angular/core';
import { TotaalProduct } from '../totaal-product';
import { TableData } from './table-data';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { FormGroup } from '@angular/forms';
import { PrevooService } from '../prevoo.service';
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  source;

  
  data2 = [
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
      product: {
        title: 'Product',
        filter: {
          type: 'list',
          config: {
            selectText: 'Product',
            list: [
              { value: 'Ster', title: 'Ster' },
              { value: 'Maan', title: 'Maan' },
              { value: 'Bol', title: 'Bol' },
            ],
          },
        },
      },
      dikte: {
        title: 'Dikte',
        filter: {
          type: 'list',
          config: {
            selectText: 'Dikte',
            list: [
              { value: '10mm', title: '10mm' },
              { value: '20mm', title: '20mm' },
              { value: '30mm', title: '30mm' },
            ],
          },
        },
      },
      formaat: {
        title: 'Formaat',
        filter: {
          type: 'list',
          config: {
            selectText: 'Formaat',
            list: [
              { value: 'Klein', title: 'Klein' },
              { value: 'Middel', title: 'Middel' },
              { value: 'Groot', title: 'Groot' },
            ],
          },
        },
      },
      materiaal: {
        title: 'Materiaal',
        filter: {
          type: 'list',
          config: {
            selectText: 'Materiaal',
            list: [
              { value: 'MDF', title: 'MDF' },
              { value: 'Hout', title: 'Hout' },
            ],
          },
        },
      },
      opties: {
        title: 'Opties'
      },
      kleur: {
        title: 'Kleur',
        filter: {
          type: 'list',
          config: {
            selectText: 'Kleur',
            list: [
              { value: 'Groen', title: 'Groen' },
              { value: 'Rood', title: 'Rood' },
            ],
          },
        },
      }
      ,
      datumKlaar: {
        title: 'Datum Klaar'
      },
      naamKlant: {
        title: 'Naam Klant'
      }
    }
  };
  multiple0: boolean = false;
  multiple1: boolean = true;
  options0: Array<any> = [];
  options1: Array<any> = [];
  selection: Array<string>;
  form: FormGroup;


// Default selection
optionsModel: number[] = [1];
date: DateModel;
dateOptions: DatePickerOptions;
// Settings configuration
mySettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
};

// Text configuration
myTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Select',
    allSelected: 'All selected',
};

// Labels / Parents
myOptions: IMultiSelectOption[] = [
  { id: 1, name: 'Opties', isLabel: true },
  
    { id: 2, name: 'Open', parentId: 1 },
    { id: 3, name: 'Voetje', parentId: 1 },
    { id: 4, name: 'Plankje', parentId: 1 },
    { id: 5, name: 'Ophangen', parentId: 1 },
  
];

public pageTitle: string = "Orders"
public rows: Array < any > = [];
public columns: Array < any > = [{
    title: 'Product',
    name: 'product',
  }, {
    title: 'Dikte',
    name: 'dikte',
    sort: false,

  }, {
    title: 'Formaat',
    name: 'formaat',

  }, {
    title: 'Materiaal',
    name: 'materiaal',
  },
  {
    title: 'Opties',
    name: 'opties'
  },
  {
    title: 'Kleur',
    name: 'kleur',
  },
  {
    title: 'Datum Klaar',
    name: 'datumKlaar',
    sort: 'asc',
  },
  {
    title: 'Klant',
    name: 'naamKlant',
  },
];
public page: number = 1;
public itemsPerPage: number = 10;
public maxSize: number = 5;
public numPages: number = 1;
public length: number = 0;

public config: any = {
  paging: true,
  sorting: {
    columns: this.columns
  },
  filtering: {
    filterString: ''
  },
  className: ['table-striped', 'table-bordered','thead-inverse','table-hover','table-responsive']
};

private data: Array < any > = TableData;

public constructor() {
  this.length = this.data.length;
  this.dateOptions = new DatePickerOptions();
  this.source = new LocalDataSource(this.data2); // create the source
}

public ngOnInit(): void {
  this.onChangeTable(this.config);
}

onChange() {
  console.log(this.optionsModel);
}

public changePage(page: any, data: Array < any > = this.data): Array < any > {
  let start = (page.page - 1) * page.itemsPerPage;
  let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
  return data.slice(start, end);
}

public changeSort(data: any, config: any): any {
  if (!config.sorting) {
    return data;
  }

  let columns = this.config.sorting.columns || [];
  let columnName: string = void 0;
  let sort: string = void 0;

  for (let i = 0; i < columns.length; i++) {
    if (columns[i].sort !== '' && columns[i].sort !== false) {
      columnName = columns[i].name;
      sort = columns[i].sort;
    }
  }

  if (!columnName) {
    return data;
  }

  // simple sorting
  return data.sort((previous: any, current: any) => {
    if (previous[columnName] > current[columnName]) {
      return sort === 'desc' ? -1 : 1;
    } else if (previous[columnName] < current[columnName]) {
      return sort === 'asc' ? -1 : 1;
    }
    return 0;
  });
}

public changeFilter(data: any, config: any): any {
  let filteredData: Array < any > = data;
  this.columns.forEach((column: any) => {
    if (column.filtering) {
      filteredData = filteredData.filter((item: any) => {
        return item[column.name].match(column.filtering.filterString);
      });
    }
  });

  if (!config.filtering) {
    return filteredData;
  }

  if (config.filtering.columnName) {
    return filteredData.filter((item: any) =>
      item[config.filtering.columnName].match(this.config.filtering.filterString));
  }

  let tempArray: Array < any > = [];
  filteredData.forEach((item: any) => {
    let flag = false;
    this.columns.forEach((column: any) => {
      if (item[column.name].toString().match(this.config.filtering.filterString)) {
        flag = true;
      }
    });
    if (flag) {
      tempArray.push(item);
    }
  });
  filteredData = tempArray;

  return filteredData;
}

public onChangeTable(config: any, page: any = {
  page: this.page,
  itemsPerPage: this.itemsPerPage
}): any {
  if (config.filtering) {
    Object.assign(this.config.filtering, config.filtering);
  }

  if (config.sorting) {
    Object.assign(this.config.sorting, config.sorting);
  }

  let filteredData = this.changeFilter(this.data, this.config);
  let sortedData = this.changeSort(filteredData, this.config);
  this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
  this.length = sortedData.length;
}

public onCellClick(data: any): any {
  console.log(data);
}
}
