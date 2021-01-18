import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../services/user.model';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as MediumEditor from 'medium-editor';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit, OnInit {
  @Input() user: User | null | undefined;
  @ViewChild("container") container!: ElementRef;

  editor: any;
  editorContent: any;

  constructor(public auth: AuthService, private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.getEditorContent();
  }

  ngAfterViewInit():void {
    const element = this.container.nativeElement;
    this.editor = new MediumEditor(element, {
      placeholder: false,
      toolbar: {
        /* These are the default options for the toolbar,
           if nothing is passed this is what is used */
        allowMultiParagraphSelection: true,
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
        diffLeft: 0,
        diffTop: -10,
        firstButtonClass: 'medium-editor-button-first',
        lastButtonClass: 'medium-editor-button-last',
      
        standardizeSelectionStart: false,
        static: false,
        /* options which only apply when static is true */
        align: 'center',
        sticky: false,
        updateOnEmptySelection: false
      }
      
    });
    this.editor.subscribe('editableInput', () => {
      // Making the content in the editor in-sync with the firebase database
      const content = this.editor.getContent(); 
      const activityRef: AngularFirestoreDocument<any> =  this.afs.doc(`activities/${this.user?.uid}`);
      const data = {
        content: content
      }
      return activityRef.set(data, { merge: true });
    });

  }

  getEditorContent() {
    this.afs.collection('activities').doc(this.user?.uid).get()
      .subscribe((snapshot) => {
        this.editorContent = snapshot.data();
      });
  }


}
