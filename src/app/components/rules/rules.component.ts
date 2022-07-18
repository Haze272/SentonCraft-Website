import { Component} from '@angular/core';
import {concat} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {
  rules: number;

  constructor() {
    this.rules = 1;
  }

  showRule(number: number) {
    this.rules = number;
  }
}
