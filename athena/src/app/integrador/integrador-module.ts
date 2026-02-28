import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntegradorRoutingModule } from './integrador-routing-module';
import { ProjetoList } from './pages/projetos/projeto-list/projeto-list';
import { ProjetoForm } from './pages/projetos/projeto-form/projeto-form';

@NgModule({
  declarations: [],
  imports: [CommonModule, IntegradorRoutingModule, ProjetoList, ProjetoForm],
})
export class IntegradorModule {}
