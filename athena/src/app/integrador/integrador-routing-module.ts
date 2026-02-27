import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoList } from './pages/projetos/projeto-list/projeto-list';
import { ProjetoForm } from './pages/projetos/projeto-form/projeto-form';

const routes: Routes = [
  {
    path: 'projetos',
    component: ProjetoList,
  },
  {
    path: 'projetos/novo',
    component: ProjetoForm,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegradorRoutingModule {}
