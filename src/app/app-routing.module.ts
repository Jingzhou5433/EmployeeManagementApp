import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GameBoardComponent} from './game-board/game-board.component';
import {MyDemosComponent} from './my-demos/my-demos.component';
import {SplitServerComponent} from './split-server/split-server.component';
import {ServicePracticeComponent} from './service-practice/service-practice.component';
import {PipeComponent} from './pipe/pipe.component';
import {EmployeeComponent} from './employee/employee.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {ObservableComponent} from './observable/observable.component';
const routes: Routes = [
  {
    path: 'game',
    component: GameBoardComponent
  },
  {
    path:  'demo',
    component: MyDemosComponent
  },
  {
    path:  'split',
    component: SplitServerComponent
  },
  {
    path:  's',
    component: ServicePracticeComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent
  },
  {
    path: 'obs',
    component: ObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
