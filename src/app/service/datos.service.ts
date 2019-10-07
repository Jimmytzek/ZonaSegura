import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore} from '@angular/fire/firestore'

interface dato {
  id : string
  COLONIAS : string
  EDAD : string
  FECHA : string
  GENERO : string
  HORA : string
  TIPO_DE_INCIDENTE : string
  TOTAL_VICTIMAS: string
  DIRECCION : string
}


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private db: AngularFirestore) { }

  getDatos(){
    return this.db.collection('Dato').snapshotChanges().pipe( map(rooms =>{
      return rooms.map(a =>{
        const data = a.payload.doc.data() as dato;
        data.id = a.payload.doc.id;
        return data;
      })

    }))
  }
}
