import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, CollectionReference, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreWishService {
  private itemCollection: CollectionReference<DocumentData>;
  private firestore: Firestore;

  constructor() {
    this.firestore = inject(Firestore);
    this.itemCollection = collection(this.firestore, 'wish');
  }

  // Lấy danh sách các items từ Firestore
  getItems(): Observable<any[]> {
    return collectionData(this.itemCollection, { idField: 'id' });
  }

  // Thêm một item mới vào Firestore
  addItem(item: any): Promise<DocumentData> {
    return addDoc(this.itemCollection, item);
  }
}
