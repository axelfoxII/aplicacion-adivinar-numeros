import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  num4: number = 0;
  num5: number = 0;

  suma: any;

  forma: FormGroup

  constructor(private fb: FormBuilder) {

    this.forma = this.fb.group({
      numero1: [''],
      numero2: [''],
      numero3: [''],
      numero4: [''],
      numero5: [''],
    })

  }

  ngOnInit(): void {

    Swal.fire({
      imageUrl: './assets/img/numeros/adivino.png',
      title: `Piense en un número de 1 al 30 y marca las tablas donde aparece tu número pensado y adivinare tu número...`,
    })

  }

  adivinarNumero() {

    //tabla1
    if (this.forma.value.numero1 === true) {

      this.num1 = 8;

    } else {

      this.num1 = 0;

    }

    //tabla2
    if (this.forma.value.numero2 === true) {

      this.num2 = 2;

    } else {

      this.num2 = 0;

    }

    //tabla3
    if (this.forma.value.numero3 === true) {

      this.num3 = 4;

    } else {

      this.num3 = 0;

    }

    //tabla4
    if (this.forma.value.numero4 === true) {

      this.num4 = 1;

    } else {

      this.num4 = 0;

    }

    //tabla5
    if (this.forma.value.numero5 === true) {

      this.num5 = 16;

    } else {

      this.num5 = 0;

    }


    this.suma = this.num1 + this.num2 + this.num3 + this.num4 + this.num5;


    if (this.suma < 31 && this.suma > 0) {

      Swal.fire({
        imageUrl: './assets/img/numeros/adivino.png',
        title: `el número pensado es <strong>"${this.suma}"</strong>`,
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false
      }).then((result) => {

        if (result.value) {
          this.forma.reset();
        }

      })

    } else {

      Swal.fire({
        imageUrl: './assets/img/numeros/enojado.png',
        title: `Usted es no penso nada..`,
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false
      }).then((result) => {

        if (result.value) {
          this.forma.reset();
        }

      })

    }



  }

}
