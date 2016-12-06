import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less'],
  animations: [
    trigger('slideDown', [
      state('in', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({ opacity: '0' }),
        animate('400ms ease-in', style({ opacity: '1' }))
      ]),
      transition('* => void', [
        animate('400ms ease-out', style({ opacity: '0' }))
      ])
    ]),
  ]
})
export class PostListComponent implements OnInit {
  ids = [];
  posts: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.posts = af.database.list('posts');
  }

  trackFbObjects = (idx, obj) => obj.$key;

  log(index) {
    this.ids.push(index);
  }

  ngOnInit() {
  }

}
