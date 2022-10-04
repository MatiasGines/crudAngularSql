import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [
    {
      titular: 'Pedro Orlando', numeroTarjeta:"2121212121212121", fechaExpiracion:'11/21', cvv:'123'
    },
    {
      titular: 'Nicolas Jackson', numeroTarjeta:"5454548787878787", fechaExpiracion:'11/22', cvv:'321'
    }
  ];

  form: formGroup;
  constructor(private fb: formBuilder) {
    this.form = this.fb.group({
      titular: [''],
      numeroTarjeta: [''],
      fechaExpiracion: [''],
      cvv:['']
    }) 

  }

  ngOnInit(): void {
  }

}
