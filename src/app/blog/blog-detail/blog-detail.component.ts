import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  blogId: string;

  cmtForm: FormGroup;

  comments = [
    {
      avatar: '../../../assets/blog/user1.png',
      name: 'Taylor Swift',
      content: 'I love orange juice, it makes me beautiful',
      createdAtFixed: '6/24/21, 1:27 AM',
      createdAtDynamic: null
    },
    {
      avatar: '../../../assets/blog/user3.png',
      name: 'Ava Max',
      content: 'Having orange juice daily makes my skin as soft as baby',
      createdAtFixed: '6/24/21, 1:27 AM',
      createdAtDynamic: null
    },
    {
      avatar: '../../../assets/blog/user5.png',
      name: 'Bella poarch',
      content: 'Juice has improved me health immensely for the past 2years',
      createdAtFixed: '6/24/21, 1:27 AM',
      createdAtDynamic: null
    },
  ]

  constructor(private activedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      this.blogId = params['title']
    });

    this.cmtForm = this.formBuilder.group({
      fullName: [null, Validators.required],
      contact: [null],
      comment: [null, Validators.required]
    })
  }

  onCmt(): void {
    const newCmt = {
      avatar: '../../../assets/blog/user6.png',
      name: this.cmtForm.value.fullName,
      content: this.cmtForm.value.comment,
      createdAtFixed: null,
      createdAtDynamic: Date.now()
    };

    this.comments.push(newCmt);
    this.cmtForm.reset();
  }

}
