import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute , Params } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  constructor(private fb: FormBuilder,private routerInfo:ActivatedRoute) { }

  name: string = 'yvonne';
  date: Date = new Date();
  dateStr: Date = new Date();
  box: string = 'div-dom';
  itemClass: string = 'item-p';
  h3Dom: boolean = true;
  h3Class: string = 'h3-dom font-w string';
  isActive: boolean = true;
  isMax: boolean = true;
  colors: Array<string> = ['red', 'blue', 'yellow', 'green'];
  title: string = '';
  age: FormControl = new FormControl('');
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });
  fromData = {
    name: '',
    password: ''
  };
  type: number = 3;

  vailDataForm: FormGroup = this.fb.group({
    userName: ['', [Validators.required, Validators.maxLength(18), Validators.minLength(6)]],
    password: ['', [Validators.required, this.passwordVal]],
    phone: ['', [Validators.required, this.phoneVal]]
  });

  ngOnInit(): void {
    // console.log(this.routerInfo)
    console.log(this.routerInfo.snapshot.queryParams)
    // this.routerInfo.params.subscribe((params:Params)=>{
    //   console.log(params)
    // })
  }

  subvailDataFormFormFun() {
    console.log(this.vailDataForm.get('password'));
  }

  passwordVal(password: FormControl): { [key: string]: any } | null {
    let value = password.value || '';
      const valid = value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,20})$/);
      return valid ? null : { msg: '密碼格式不對' };
    
  }

  phoneVal(phone: FormControl): { [key: string]: any } | null {
    const value = phone.value || '';
    if (!value) return { msg: '請輸入手機號碼' };
    const valid = /[0-9]{11}/.test(value);
    return valid ? null : { msg: '手機號碼格式不對，必須是11位數字' };
  }

  clickFun(e: Event): void {
    console.log(e);
    alert("妳點擊了按鈕");
  }

  inpCharge(e: any): void {
    console.log(e.target.value);
  }

  getUserName(userName: string): void {
    console.log(userName);
  }

  ageChangeFun() {
    this.age.setValue(18);
  }

  subFormFun() {
    console.log(this.loginForm.value);
  }

  subBtnFun(obj: any) {
    console.log(obj);
  }
}
