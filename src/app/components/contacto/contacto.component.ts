
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from  '@angular/fire/firestore' ;
import { Observable } from 'rxjs';

declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {
  items: Observable<any[]>;
  constructor(db :  AngularFirestore) {


    $(document).ready(function () {

      $('#enviarDatos').click(function () {
        
        var nombrei = $('#nombre').val();
        var apellidoi = $('#apellido').val();
        var telefonoi = $('#telefono').val();
        var ciudadi = $('#ciudad').val();
        var emaili = $('#email').val();
        var mensajei = $('#mensaje').val();
        
        this.items = db.collection('contacto').add({

          nombre: nombrei,
          apellido: apellidoi,
          correo: emaili,
          telefono: telefonoi,
          ciudad: ciudadi,
          mensaje: mensajei

        });
        $('input[type="text"]').val('');
        window.alert("Información enviada");
      });
    });




   }

  ngOnInit() {


  }






}

