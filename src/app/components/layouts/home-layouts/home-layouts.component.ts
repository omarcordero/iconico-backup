import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/services/sucursal.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-layouts',
  templateUrl: './home-layouts.component.html',
  styleUrls: ['./home-layouts.component.css']
})
export class HomeLayoutsComponent implements OnInit {

  sucursal = [];
  sucursalId = 0;

  constructor(
    private sucursalService : SucursalService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    console.log('Entrando al layouts');
    this.getSucursal();
  }

  getSucursal(){
    const sucursal = JSON.parse(sessionStorage.getItem('sucursal'));
    console.log(sucursal);
    if (sucursal === null) {
      this.getAllSucursal();
      var modal = document.getElementById("modal-sucursal");
      modal.style.display = "block";
    } else {
      var modal = document.getElementById("modal-sucursal");
      modal.style.display = "none";
    }
  }

  getAllSucursal(){
    this.sucursalService.getSucursal().subscribe(
      (res) => {
        if (res.status) {
          this.sucursal = res.data;
          console.log(this.sucursal);
        }
      }
    )
  }

  selectSucursal(id){
    this.sucursalId = id;
  }

  addSucursalStorage(){
    if (this.sucursalId === 0) {
      alert('Seleccione una sucursal');
    } else {
      const json = {
        sucursal : this.sucursalId
      };
      sessionStorage.setItem('sucursal', JSON.stringify(json));
      var modal = document.getElementById("modal-sucursal");
      modal.style.display = "none";
    }
  }

}
