import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	grados: any;
	grad: any;
	indice: any;
  constructor() { 
  	this.grad = [
  		360,
		298,
		239,
		179,
		119,
		62
	];
	this.indice = 0;
    this.grados = this.grad[this.indice];                                                                                                                                                                                                                                                                                                                                                                                                                      
  }

  ngOnInit() {}


  Girar() {
  	this.indice++;
  	console.log(this.grados);
  	if (this.indice == 5) {
  		this.indice = 0;
  	}
  	this.grados = this.grad[this.indice]; 
  	$("#giro").css("transform", "rotate("+this.grados+"deg)");
  }
}
