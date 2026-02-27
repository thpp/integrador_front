import { A11yModule, LiveAnnouncer } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

export interface IProjeto {
  id: number;
  tituloDoProjeto: string;
  curso: string;
  termo: number;
  tutorDoProjeto: string;
  categoria: string;
  quantidadeDeAlunos: number;
  multicurso: string;
  envolveEmpresa: string;
}

const PROJETOS: IProjeto[] = [
  {
    id: 1,
    curso: 'Engenharia de Software',
    termo: 1,
    tituloDoProjeto: 'Sistema de Gerenciamento de Tarefas',
    tutorDoProjeto: 'Dr. João Silva',
    categoria: 'Desenvolvimento de Software',
    quantidadeDeAlunos: 5,
    multicurso: 'Sim',
    envolveEmpresa: 'Não',
  },
  {
    id: 2,
    curso: 'Ciência da Computação',
    termo: 2,
    tituloDoProjeto: 'Análise de Dados para Previsão de Vendas',
    tutorDoProjeto: 'Dra. Maria Oliveira',
    categoria: 'Ciência de Dados',
    quantidadeDeAlunos: 4,
    multicurso: 'Não',
    envolveEmpresa: 'Sim',
  },
  {
    id: 3,
    curso: 'Sistemas de Informação',
    termo: 4,
    tituloDoProjeto: 'Aplicativo de Monitoramento de Saúde Mental',
    tutorDoProjeto: 'Prof. Carlos Eduardo',
    categoria: 'Desenvolvimento Mobile',
    quantidadeDeAlunos: 3,
    multicurso: 'Sim',
    envolveEmpresa: 'Não',
  },
  {
    id: 4,
    curso: 'Engenharia de Computação',
    termo: 6,
    tituloDoProjeto: 'Automação Residencial com IoT',
    tutorDoProjeto: 'Dra. Patrícia Santos',
    categoria: 'Internet das Coisas',
    quantidadeDeAlunos: 6,
    multicurso: 'Não',
    envolveEmpresa: 'Sim',
  },
  {
    id: 5,
    curso: 'Análise e Desenvolvimento de Sistemas',
    termo: 3,
    tituloDoProjeto: 'Portal de E-commerce para Artesãos Locais',
    tutorDoProjeto: 'Me. Roberto Rocha',
    categoria: 'Desenvolvimento Web',
    quantidadeDeAlunos: 4,
    multicurso: 'Sim',
    envolveEmpresa: 'Não',
  },
  {
    id: 6,
    curso: 'Ciência da Computação',
    termo: 8,
    tituloDoProjeto: 'Algoritmos de IA para Detecção de Fraudes',
    tutorDoProjeto: 'Dr. Fernando Souza',
    categoria: 'Inteligência Artificial',
    quantidadeDeAlunos: 2,
    multicurso: 'Não',
    envolveEmpresa: 'Sim',
  },
  {
    id: 7,
    curso: 'Engenharia de Software',
    termo: 5,
    tituloDoProjeto: 'Plataforma de Gestão Escolar Gamificada',
    tutorDoProjeto: 'Dra. Aline Ferreira',
    categoria: 'Educação Tecnológica',
    quantidadeDeAlunos: 5,
    multicurso: 'Sim',
    envolveEmpresa: 'Não',
  },
  {
    id: 8,
    curso: 'Design Digital',
    termo: 4,
    tituloDoProjeto: 'Redesign de Interface para Apps de Bancos',
    tutorDoProjeto: 'Prof. Marcos Lima',
    categoria: 'UX/UI Design',
    quantidadeDeAlunos: 3,
    multicurso: 'Sim',
    envolveEmpresa: 'Sim',
  },
  {
    id: 9,
    curso: 'Segurança da Informação',
    termo: 7,
    tituloDoProjeto: 'Análise de Vulnerabilidades em Redes Sem Fio',
    tutorDoProjeto: 'Me. Gustavo Henrique',
    categoria: 'Cibersegurança',
    quantidadeDeAlunos: 4,
    multicurso: 'Não',
    envolveEmpresa: 'Não',
  },
  {
    id: 10,
    curso: 'Engenharia de Software',
    termo: 2,
    tituloDoProjeto: 'Sistema de Controle de Estoque com Blockchain',
    tutorDoProjeto: 'Dra. Beatriz Costa',
    categoria: 'Inovação Tecnológica',
    quantidadeDeAlunos: 5,
    multicurso: 'Não',
    envolveEmpresa: 'Sim',
  },
  {
    id: 11,
    curso: 'Sistemas de Informação',
    termo: 5,
    tituloDoProjeto: 'Chatbot para Atendimento Jurídico Autônomo',
    tutorDoProjeto: 'Prof. Ricardo Mendes',
    categoria: 'Processamento de Linguagem Natural',
    quantidadeDeAlunos: 3,
    multicurso: 'Sim',
    envolveEmpresa: 'Não',
  },
  {
    id: 12,
    curso: 'Ciência da Computação',
    termo: 3,
    tituloDoProjeto: 'Visualização de Dados sobre Mudanças Climáticas',
    tutorDoProjeto: 'Dra. Helena Martins',
    categoria: 'Ciência de Dados',
    quantidadeDeAlunos: 4,
    multicurso: 'Sim',
    envolveEmpresa: 'Não',
  },
];

@Component({
  selector: 'app-projeto-list',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    A11yModule,
    RouterLink,
  ],
  templateUrl: './projeto-list.html',
  styleUrl: './projeto-list.css',
})
export class ProjetoList implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = [
    'id',
    'tituloDoProjeto',
    'curso',
    'termo',
    'tutorDoProjeto',
    'categoria',
    'quantidadeDeAlunos',
    'multicurso',
    'envolveEmpresa',
    'actions',
  ];
  dataSource = new MatTableDataSource<IProjeto>(PROJETOS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onActionClick(row: IProjeto, action: string) {
    console.log(`Action "${action}" clicked for row:`, row);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Ordenação aplicada: ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Ordenação removida');
    }
  }
}
