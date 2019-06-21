import { Component, OnInit, Input } from '@angular/core';

import * as gravatar from 'gravatar';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {

  @Input() profile;
  @Input() reports;
  avatar_url = null;

  constructor() { }

  ngOnInit() {
    this.avatar_url = gravatar.url(this.profile.email, {s: 40});
  }

}