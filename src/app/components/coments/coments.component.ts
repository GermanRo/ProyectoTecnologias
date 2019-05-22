
import { Component, OnInit} from '@angular/core';
import { AngularFirestore } from  '@angular/fire/firestore' ;
import { Observable } from 'rxjs';

declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit {

  items: Observable<any[]>;
  constructor(db :  AngularFirestore) {

    $(document).ready(function () {

      $('#comentar').click(function () {
        
        var comentarioi = $('#come').val();
        
        
        this.items = db.collection('comentarios').add({

          Comentario: comentarioi
          
        });
        $('input[type="text"]').val('');
        $("#1div").html(comentarioi);
        window.alert("Información enviada");
      });
    });

  }
  ngOnInit() {
  }

 


}
