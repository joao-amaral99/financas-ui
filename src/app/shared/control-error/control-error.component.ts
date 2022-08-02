import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss'],
})
export class ControlErrorComponent implements OnInit {
  @Input() msgErro: string = '';
  @Input() showMsgErro: boolean | undefined = false;

  constructor() {}

  ngOnInit(): void {}
}
