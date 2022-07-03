import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  //i18n select
  nombre:string="Efren";
  genero:string = "masculino";

  intitacionM = {
      'masculino':'invitarlo',
      'femenino':'invitarla'
  }

  //i18nPlural
  clientes:string[] = ['Maria','Efren','Fernando']
  clientesMapa = {
    '=0' : 'No tenemos ningun cliente esperando',
    '=1' : 'Tenemos un cliente esperando',
    'other' : `tenemos # clientes esperando`
  }
  constructor() { }

  ngOnInit(): void {
  }

  cambiarGenero(){
    if(this.genero === "masculino"){
        this.nombre = "Fernanda"
        this.genero = 'femenino'
    }else{
        this.nombre = "Efren"
        this.genero = "masculino"
    }
  }

  agregarCliente(){
    this.clientes.push("nuevo");
  }

  eliminarCliente(){
    this.clientes.pop();
  }

  //keyvalue Pipe

  persona = {
    nombre : "Efren",
    edad : '28',
    direccion:'Guayaquil'
  }

  //json pipe

  heroes = [
    {
      nombre:"superman",
      vuela:true
    },
    {
      nombre:"robin",
      vuela:false
    }
  ]

  //async pipe
  miObservable = interval(5000); 

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data promesa')
    },3500)
  })

}
