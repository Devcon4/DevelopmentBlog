import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  @Input() currentPost: Post;

  constructor() { }

  ngOnInit() {
  }

}

export class Post {
  fields: Field[] = [];
}

export class Field {
  type: string;
  value: any;
}
