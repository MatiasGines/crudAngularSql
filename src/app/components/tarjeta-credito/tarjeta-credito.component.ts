import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

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

  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  agregarTarjeta(){
    //obtener los valores en un objeto
    const tarjeta: any = {
    titular: this.form.get('titular')?.value,
    numeroTarjeta: this.form.get('numeroTarjeta')?.value,
    fechaExpiracion: this.form.get('fechaExpiracion')?.value,
    cvv: this.form.get('cvv')?.value
    }
    
    console.log("se imprime");
    this.listTarjetas.push(tarjeta);
    this.form.reset();
  }

}
