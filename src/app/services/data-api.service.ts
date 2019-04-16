import { map } from 'rxjs/operators';
import { InfoInterface } from '../models/Info';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) {
    this.infoCollection = afs.collection<InfoInterface>('infos');
    this.info = this.infoCollection.valueChanges();

  }
  private infoCollection: AngularFirestoreCollection<InfoInterface>;
  private info: Observable<InfoInterface[]>;
  private infoDoc: AngularFirestoreDocument<InfoInterface>;
  private inf: Observable<InfoInterface>;
  //Metodos para trabajar con la informacion 
  getInfo() {
    return this.info = this.infoCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as InfoInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  getOneinfo(idInfo: string) {
    this.infoDoc = this.afs.doc<InfoInterface>(`infos/${idInfo}`);
    return this.inf = this.infoDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists == false) {
        return null;
      } else {
        const data = action.payload.data() as InfoInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addInfo() { }
  updateInfo() { }
  deleteInfo() { }

}
