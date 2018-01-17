import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.less']
})
export class DoctorComponent implements OnInit {
  doctors: doctor[];
  selectedUser: doctor;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('api/doctor/').subscribe(res => {
      this.doctors = res;
    });
  }
  viewUser(select: doctor) {
    console.log(JSON.stringify(select));

  }
  deleteUser(select: doctor) {
    this.apiService.delete('api/doctor/' + select.idDoctor).subscribe(res => {
      console.log(res);
    });

  }
}

interface doctor {
  idDoctor: number;
  firstNameDoctor: string;
  lastNameDoctor: string;
  specDoctor: string;
}