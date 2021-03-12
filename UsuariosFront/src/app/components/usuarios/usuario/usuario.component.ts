import { Component, OnInit } from '@angular/core';
import  {FormGroup, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      id: 0,
      nombre:['',[Validators.required, Validators.maxLength(50)]],
      ApellidoPaterno:['',[Validators.required, Validators.maxLength(50)]],
      ApellidoMaterno:['',[Validators.required, Validators.maxLength(50)]],
      RFC:['',[Validators.required, Validators.maxLength(13), Validators.minLength(13)]],

    })
  }

  ngOnInit(): void {
  }

  guardarUsuario(){
    console.log(this.form);
  }

}
