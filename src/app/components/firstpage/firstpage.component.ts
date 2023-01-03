import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  goToChildPage() {
    this.router.navigate(['childpage'], { relativeTo: this.route });
  }

}
