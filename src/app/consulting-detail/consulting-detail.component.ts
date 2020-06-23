import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulting-detail',
  templateUrl: './consulting-detail.component.html',
  styleUrls: ['./consulting-detail.component.css'],
})
export class ConsultingDetailComponent implements OnInit {
  consultingForm: FormGroup;
  contentControl = new FormControl();

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.consultingForm = this.formBuilder.group({
      content: this.contentControl,
      checkbox: false,
    });
  }

  ngOnInit(): void {}

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event) {
    // Before moving to another page
    const performanceEntries = performance.getEntriesByType('navigation');
    console.log('beforeunload: ' + performanceEntries[0]['type']);
  }

  onSubmit(data): void {
    this.consultingForm.reset();
    this.router.navigate(['/']);
    console.warn('submit: ', data);
  }
}
