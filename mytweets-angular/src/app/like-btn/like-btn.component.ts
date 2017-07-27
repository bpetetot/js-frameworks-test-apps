import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-btn',
  templateUrl: './like-btn.component.html',
  styleUrls: ['./like-btn.component.css']
})
export class LikeBtnComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

  public onClick() {
    this.data.isLiked ? this.data.likes-- : this.data.likes++;
    this.data.isLiked = !this.data.isLiked;
  }

}
