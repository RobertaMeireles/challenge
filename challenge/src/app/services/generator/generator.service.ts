import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError:boolean = false): void{
    this.snackBar.open(msg,'X',{
      duration:2000,
      horizontalPosition:"right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-success'] : ['msg-error'] 
    })
  }
}
