import { Component, NgZone, OnInit } from '@angular/core';
import { wobble, fadeInOut, slideInOut } from '../shared/animations/index';
import { SiteInfoService } from '../shared/services/site-info.service';

//noinspection TsLint
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    wobble,
    fadeInOut,
    slideInOut
  ],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOut]': '' }
})
export class HomeComponent implements OnInit {
  siteTitle: string;
  pageContent: string;
  wobbleState = 'inactive';

  constructor(private zone: NgZone, private siteInfoService: SiteInfoService) {
  }

  ngOnInit() {
    setTimeout(() => this.wobbleState = 'active', 1225);

    this.siteInfoService.siteInfo$.subscribe(
      (siteInfo: any) => {
        if (siteInfo && siteInfo.homepage) {
          this.siteTitle = siteInfo.homepage.siteTitle ? siteInfo.homepage.siteTitle : 'no site title found';
          this.pageContent = siteInfo.homepage.pageContent ? siteInfo.homepage.pageContent : 'no homepage content found';
        }
      },
      (err: Error) => {
        console.error(err);
      }
    );
  }

  triggerAnimation() {
    this.wobbleState = 'active';
  }

  resetWobble() {
    this.zone.run(() => {
      this.wobbleState = 'inactive';
    });
  }

}
