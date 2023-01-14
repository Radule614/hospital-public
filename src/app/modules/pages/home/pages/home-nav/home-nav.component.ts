import { Component, OnInit } from '@angular/core';

export interface NavRoute {
  path: string;
  title: string;
}

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit {
  m_Routes: NavRoute[] = [
    {
      path: 'patient-info',
      title: 'Profile'
    },
    {
      path: 'schedule-appointment',
      title: 'Schedule Appointment'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
