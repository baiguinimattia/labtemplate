import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.less']
})
export class PatientComponent implements OnInit {
  users: Patient[];
  selectedUser: Patient;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('api/patient/').subscribe(res => {
      this.users = res;
    });
    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewUser(this.selectedUser) },
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteUser(this.selectedUser) }
    ];
  }
  viewUser(select: Patient) {
    console.log(JSON.stringify(select));

  }
  deleteUser(select: Patient) {
    this.apiService.delete('api/user/' + select.idPatient).subscribe(res => {
      console.log(res);
    });

  }
}

interface Patient {
  idPatient: number;
  firstNamePatient: string;
  lastNamePatient: string;
  sexPatient: string;
  dobPatient:string,
  adressPatient:string,
  phonePatient:string
}
