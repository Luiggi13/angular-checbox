import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
// Aqui te recomiendo que uses private ya que es una propiedad internal
private displayedColumns = [];
_tmp = [];
  
  columnDefinitions = [
    { def: 'X_ID', showItem: true },
    { def: 'X_CODI_IMMOBLE', showItem: true },
    { def: 'X_CODI_SOCIETAT', showItem: true },
    { def: 'X_DIRECCIO_COMPLERTA', showItem: true },
    { def: 'X_POBLACIO_UBICACIO', showItem: true },
    { def: 'X_PROVINCIA', showItem: true },
    /**
     * Esto lo comento para dejar un template mas pequeño y que se vea todo de una pasada.
      { def: 'X_CALIFICACION_REVISADO_05002', showItem: true },
      { def: 'X_N_EXPD_CALIF_REVISADO_05003', showItem: true },
      { def: 'X_REGIMEN_1_Revisado_05006', showItem: true },
      { def: 'X_FECHA_EXPD_CALIF_REVISADO_05004', showItem: true },
      { def: 'X_PRECIO_MAX_VENTA_REVISADO_05011', showItem: true },
      { def: 'X_COMERCIALIZACION_REVISADO_05009', showItem: true },
      { def: 'X_PRECIO_MAX_RENTA_REVISADO_05013', showItem: true },
      { def: 'actions', showItem: true }
     */

];

ngOnInit(){
  // Inicio aqui el template y asi nos ahorramos el botón de mostrar
  this._tmp = this.columnDefinitions;
}

// Te he hecho en un solo metodo el ocultar columna
// Lo qe hago aqui es una reasignación de columnDefinitions convirtiendo a false la key que recibe y despues asigno a _tmp el nuevo valor filtrando por las columnas que tengan showItem a true
  ocultarColumna(paramEntrada) {
    this.columnDefinitions = this.columnDefinitions.map(column=>{
      if(column.def === paramEntrada){
        column.showItem = false;
      }
      return column;
    })
    this._tmp = this.columnDefinitions.filter(column=>column.showItem);
    console.log('----------ver columnDefinitions-----------');
    console.log(this.displayedColumns);
    console.log('----------ver columnDefinitions-----------');
}

showFilteredColumns(){
 this._tmp = this.columnDefinitions.filter(column=>column.showItem);
}
// Reinicio las columnas al estado inicial dejando showItem a true y dejando _tmp con el valor inicial de column defs
 rePintarCols() {
    this.columnDefinitions = this.columnDefinitions.map(column=>{
      column.showItem = true;
      return column;
    });
    this._tmp = this.columnDefinitions;
  }

}