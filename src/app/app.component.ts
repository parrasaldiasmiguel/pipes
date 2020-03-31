import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuberias';
  nombre='Miguel';
  nombre2='Javier alonso perez perez';
  arreglo=[1,2,3,4,5,6,7,8,9,0];
  PI=Math.PI;
  a=0.234;
  salario=1234.5;

  persona={
    nombre:"Simón",
    apellido:"Parra",
    edad:18,
    direccion:{
      calle:"Porvenir",
      casa:"2296"
    }
  };
valorDePromesa= new Promise( (resolve,reject) =>{
  setTimeout( ()=>resolve('Llegó la información'),3500);
});
  fecha=new Date();
  video="tDPjf1tCkxo"
  activar:boolean=true;

}
