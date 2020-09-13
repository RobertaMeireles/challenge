import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header/header.service';
import { GeneratorService } from './../services/generator/generator.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  //Variable to show letters
  alphabet:string = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'
  arrayLetters = []
  character:string = ''
  count:number = 0
  regex = /^[A-Za-z]+$/
  generatorButtonClicked:boolean = false

  //Variables to show the number 
  d = new Date()
  n = this.d.getSeconds()
  quantLettersNoInverted
  quantLettersInverted
  valuePosition0
  valuePosition1
  
  valueShow
  
  constructor(private headerService:HeaderService, 
             private generatorService:GeneratorService) { 

    headerService.headerData = {
      title: 'Generator',
      icon: 'addchart',
      routUrl: '/generator'
    }
  }

  ngOnInit(): void {

  }

  //---------------------------------------------
  //show letters
  set(){
    if(!this.generatorButtonClicked){ 
      this.generatorButtonClicked = true 
      this.letters()
    }
    setTimeout(() => {
      this.generatorButtonClicked = false 
    }, 4000);
  }


  letters(){
    // no character
    if(this.character === ''){
    //row 
      for (let i = 0; i < 10; i++) { 
        this.arrayLetters[i] = {};
        //col
        for (let j = 0; j < 10; j++){
          const randomChar = this.alphabet.charAt(Math.floor(Math.random() * this.alphabet.length));
          this.arrayLetters[i][j] = randomChar
        }  
      }
      // character
    }else{
      if(this.character.match(this.regex) ){
        //row 
        for (let i = 0; i < 10; i++) { 
          this.arrayLetters[i] = {}
          //col
          for (let j = 0; j < 10; j++){
            if(this.count < 20) {
              this.arrayLetters[i][j] = this.character.toUpperCase()
              this.count++
            }else{
              let randomChar = this.alphabet.charAt(Math.floor(Math.random() * this.alphabet.length));
              while(randomChar === this.character.toUpperCase()){
                randomChar = this.alphabet.charAt(Math.floor(Math.random() * this.alphabet.length));
              }
              this.arrayLetters[i][j] = randomChar
            }
          }  
        }
        this.count = 0
      }else{
        this.generatorService.showMessage('Please, only letters' , false)
      }
    }
    this.showNumber()
  }

  //---------------------------------------------
  //show Numbers

  findLetter (info1, info2)  {
    let occurrences = 0;
    for (let i = 0; i < this.arrayLetters.length; ++i){ 
      let cx = Object.values(this.arrayLetters[i]) 
      for (let j = 0; j < cx.length; j++){
        if (this.arrayLetters[i][j] == this.arrayLetters[info1][info2]) {
          occurrences++;
        }
      }
    }
    return occurrences;
  }


  lowestNumber (num) {
    let c = 2;
    let value;
    if(num <= 9){
        value = num
    }else{
        while((num / c) > 9){
            c++
        }
        value = Math.ceil(num / c)
    }
    return value
  }



  showNumber() {
    let seconds=(this.n.toString())
    this.quantLettersNoInverted=(this.findLetter(seconds.charAt(0),seconds.charAt(1)))
    this.quantLettersInverted=(this.findLetter(seconds.charAt(1),seconds.charAt(0)))

    this.valuePosition0 = this.lowestNumber(this.quantLettersNoInverted)
    this.valuePosition1 = this.lowestNumber(this.quantLettersInverted)

    this.valueShow = `${this.valuePosition0}${this.valuePosition1}`
  }


}


