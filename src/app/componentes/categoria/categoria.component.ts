import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  @Input() nombre: string;
  @Input() imagen: string;
  constructor() { }

  ngOnInit() {}

}
