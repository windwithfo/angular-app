import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [{
  path: '',
  component: IndexComponent
},
{
  path: 'test',
  component: TestComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
