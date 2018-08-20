import { Injectable } from '@angular/core';

@Injectable()

export class Service{

codetribes=[];
 Details=[];
 Code=[];

constructor(){
    this.codetribes=[
        {name:'Lwazi',pic:'Jambase.jpg', email:'Lwazi@gmail.com',Surname:'Tongo', Age:'22'},
        {name:'Nokuthula',pic:'thuli.jpg' ,email:'Nokuthula@gmail.com',Surname:'November', Age:'24'},
        {name: 'pogisho',pic:'PogiM.jpg', email:'pogisho@gmail.com',Surname:'Ntshecheng', Age:'23'},
        {name:'Nompilo',pic:'nompilo.jpg', email:'Nompilo@gmail.com',Surname:'Mofokeng', Age:'24'},
        {name: 'Khensani',pic:'Khensani.jpg', email:'khensy@gmail.com',Surname:'Mathebula', Age:'24'},
        {name:'Romeo',pic:'Romeo.jpg', email:'Romeo@gmail.com',Surname:'Ngobeni', Age:'28'},
        {name:'Senzekile',pic:'senzi.jpg' ,email:'Senzi@gmail.com',Surname:'Zwane', Age:'23'},
        {name: 'Maria',pic:'maria.jpg', email:'Maria@gmail.com',Surname:'Aphane', Age:'28'},
        {name:'Carol',pic:'carol.jpg', email:'Caro@gmail.com',Surname:'Xaba', Age:'27'},
        {name: 'Baldwin',pic:'baldwin.jpg', email:'Baldwinoh@gmail.com',Surname:'Mahole', Age:'24'},
        {name: 'Winny',pic:'winny.jpg', email:'precia@gmail.com',Surname:'Rikhotso', Age:'25'},
        {name:'Nthushi',pic:'nthusi.jpg', email:'Maureen@gmail.com',Surname:'Zitha', Age:'27'},
        {name: 'Sthembiso',pic:'sthe.jpg', email:'Sthe@gmail.com',Surname:'Chibambu', Age:'25'},
        {name: 'Neo',pic:'neo.jpg', email:'Neo@gmail.com',Surname:'Sehlabane', Age:'28'},
    ];
 
}
getcodetribes(){
    return this.codetribes
}
 addDetails(index:number){
     this.Details.push(this.codetribes[index]);
 }
 getDetails(){
    return this.Details
 }

 getCode(){
     return this.Code
     
 }

}