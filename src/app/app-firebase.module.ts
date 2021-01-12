import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';

@NgModule({
    imports: [AngularFireModule.initializeApp(environment.firebase)],
    exports: [AngularFireModule, AngularFireAuthModule, AngularFirestoreModule],
})

export class AppFirebaseModule {}