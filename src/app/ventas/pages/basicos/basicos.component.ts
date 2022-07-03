import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombreLower:string="efren";
  nombreUpper:string="Efren";
  nombreCompleto:string="efren parra";
  fecha:Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
