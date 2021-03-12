import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  @ViewChild('myTb') myTb: ElementRef;
  // @ts-ignore
  board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];
  winCondition = [];
  currPlayer = 1;
  player1 = [];
  player2 = [];
  showWin = true;
  showTie = true;


  constructor() {
  }
  ngOnInit(): void {
    this.winCondition.push([1, 2, 3]);
    this.winCondition.push([4, 5, 6]);
    this.winCondition.push([7, 8, 9]);
    this.winCondition.push([1, 4, 7]);
    this.winCondition.push([2, 5, 8]);
    this.winCondition.push([3, 6, 9]);
    this.winCondition.push([1, 5, 9]);
    this.winCondition.push([3, 5, 7]);
  }

  handler($event): void{
    const currCell = $event.currentTarget;
    if (currCell.innerHTML === ''){
      if (this.currPlayer === 1){
        currCell.innerHTML = 'X';
        this.player1.push(parseInt(currCell.id));
        this.checkWin(this.player1);
        this.currPlayer = 2;

      }else {
        currCell.innerHTML = 'O';
        this.player2.push(parseInt(currCell.id));
        this.checkWin(this.player2);
        this.currPlayer = 1;

      }
    }
  }

  checkWin(arr): any{
    for (const win of this.winCondition){
      if (win.every(e => arr.includes(e))){
        this.showWin = false;
        this.myTb.nativeElement.style.pointerEvents = 'none';
        return 0;
      }
    }
    if (this.player1.length + this.player2.length === 9){
      this.showTie = false;
      return 0;
    }
  }

  reset(): any{
    this.myTb.nativeElement.style.pointerEvents = '';
    this.showWin = true;
    this.showTie = true;
    this.player1 = [];
    this.player2 = [];
    this.currPlayer = 1;
    for (let i = 1; i < 10; i++){
      const cell = document.getElementById(i.toString(10));
      cell.innerHTML = '';
    }
  }
}
