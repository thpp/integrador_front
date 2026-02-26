import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoList } from './pages/projetos/projeto-list/projeto-list';

const routes: Routes = [
  {
    path: 'projetos',
    component: ProjetoList,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegradorRoutingModule {}
