import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { BaseReCaptchaComponent } from './base-recaptcha.component';


@Component({
  selector: 'ngx-invisible-recaptcha',
  templateUrl: './invisible-recaptcha.component.html',
})
export class InvisibleReCaptchaComponent extends BaseReCaptchaComponent implements OnInit, AfterViewInit, OnChanges {

  /**
   * Name of the global callback variable
  */
  protected readonly windowOnLoadCallback: string = 'ngx_invisible_recaptcha_onload_callback';

  /**
   * This size representing invisible captcha
   */
  protected readonly size = 'invisible';

  /**
   * Badge
   */
  @Input() badge: 'bottomright' | 'bottomleft' | 'inline' = 'bottomright';


  /**
   * Language code. Auto-detects the user's language if unspecified.
   */
  @Input() hl: string;

  constructor(
  ) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }

  /**
   * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
   */
  execute(): string {
    this.currentResponse = this.reCaptchaApi.execute(this.captchaId);

    this.resetCaptchaAfterSuccess = true;

    return this.currentResponse;
  }

  /**
  * Gets reCaptcha properties
  */
  protected getCaptchaProperties(): any {
    return {
      'sitekey': this.siteKey,
      'callback': (response) => this.handleCallback(response),
      'badge': this.badge,
      'type': this.type,
      'tabindex': this.tabIndex,
      'size': this.size
    };
  }
}

