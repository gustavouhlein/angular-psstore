import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input()
	imagem:string = "";
	@Input()
	label:string = "";
	@Input()
	tipo:string = "";
	@Input()
	preco:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
