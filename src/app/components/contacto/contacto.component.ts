
import { Component, OnInit } from '@angular/core';


declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    $(document).ready(function () {

      $('#enviarDatos').click(function () {
        
        var nombrei = $('#nombre').val();
        var apellidoi = $('#apellido').val();
        var telefonoi = $('#telefono').val();
        var ciudadi = $('#ciudad').val();
        var emaili = $('#email').val();
        var mensajei = $('#mensaje').val();

        this.db.collection('contacto').add({

          nombre: nombrei,
          apellido: apellidoi,
          correo: emaili,
          telefono: telefonoi,
          ciudad: ciudadi,
          mensaje: mensajei

        });
        $('input[type="text"]').val('');

      });
    });

  }






}

