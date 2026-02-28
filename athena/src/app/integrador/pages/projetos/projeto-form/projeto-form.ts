import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';

export interface IProjetoCursos {
  id: number;
  nome: string;
}

export interface IProjetoTutores {
  id: number;
  nome: string;
}

export interface IProjetoCategorias {
  id: number;
  categoria: string;
}

const CURSOS: IProjetoCursos[] = [
  {
    id: 1,
    nome: 'Engenharia de Software',
  },
];

const TUTORES: IProjetoTutores[] = [
  {
    id: 1,
    nome: 'Thiago',
  },
];

const CATEGORIAS: IProjetoCategorias[] = [
  {
    id: 1,
    categoria: 'EMPREENDEDORISMO',
  },
  {
    id: 2,
    categoria: 'INOVAÇÃO',
  },
];

@Component({
  selector: 'app-projeto-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './projeto-form.html',
  styleUrl: './projeto-form.css',
})
export class ProjetoForm {
  private router = inject(Router);

  cursos = CURSOS;
  tutores = TUTORES;
  categorias = CATEGORIAS;

  projetoForm = new FormGroup({
    tituloDoProjeto: new FormControl('', [Validators.required, Validators.minLength(5)]),
    curso: new FormControl('', Validators.required),
    termo: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(10)]),
    tutor: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    qtdDeAlunos: new FormControl(0, [Validators.required, Validators.min(1)]),
    cursosEnvolvidos: new FormControl<number[]>([], Validators.required),
    envolveEmpresa: new FormControl('', Validators.required),
  });

  get f() {
    return this.projetoForm.controls;
  }

  onCancel() {
    this.projetoForm.reset();
    this.router.navigate(['/integrador/projetos']);
  }

  onSubmit() {
    console.log(this.projetoForm.value);
  }
}
