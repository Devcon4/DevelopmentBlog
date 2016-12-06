import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.less']
})
export class AddPostComponent implements OnInit {

  constructor(public af: AngularFire) { }

  ngOnInit() {
  }

  post() {
    this.af.database.list('posts').push({text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime assumenda hic dolores sapiente, quo commodi iste quia earum ex cum quisquam voluptates deserunt aliquam eius consequatur, dolorum odio beatae dicta sunt cupiditate aliquid eligendi minus possimus minima! Iste hic blanditiis voluptatum, excepturi. Aperiam, quibusdam, illum. Consequuntur magnam ratione laboriosam commodi cupiditate impedit accusamus, non a nesciunt? Dolore, porro, quia! Adipisci omnis officia aliquam placeat saepe facere, assumenda eius quae ex, culpa accusamus, aperiam ipsa error natus nemo distinctio. Tempore voluptatum maxime sint at fugit recusandae voluptatibus, impedit minus itaque quidem reprehenderit, veritatis, qui est molestiae repudiandae quae vero. Pariatur natus repellendus error nam laborum voluptatum quo aliquid ipsum, dolor non veniam similique tempora consectetur, saepe esse eius qui explicabo officia reiciendis! Neque soluta harum temporibus, dolores repellat voluptatum in non ut tempora ullam nobis sint maxime sed, expedita vitae. Adipisci vero animi at numquam veritatis pariatur iusto beatae doloribus suscipit?'});
  }

}
