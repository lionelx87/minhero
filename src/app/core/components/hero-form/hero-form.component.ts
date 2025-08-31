import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { Powerstat } from '@core/models';

interface Food {
  value: string;
  viewValue: string;
}

interface PowerstatConfig {
  key: keyof Powerstat;
  label: string;
}

interface Publisher {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hero-form',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule,
    ReactiveFormsModule,
  ],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss',
})
export class HeroFormComponent {
  private readonly fb = inject(FormBuilder);

  heroForm!: FormGroup;

  intelligence = signal<number>(50);
  strength = signal<number>(50);
  speed = signal<number>(50);
  durability = signal<number>(50);
  power = signal<number>(50);
  combat = signal<number>(50);

  powerstatConfigs: PowerstatConfig[] = [
    { key: 'intelligence', label: 'Inteligencia' },
    { key: 'strength', label: 'Fuerza' },
    { key: 'speed', label: 'Velocidad' },
    { key: 'durability', label: 'Resistencia' },
    { key: 'power', label: 'Poder' },
    { key: 'combat', label: 'Combate' },
  ];

  publishers: Publisher[] = [
    { value: 'marvel', viewValue: 'Marvel Comics' },
    { value: 'dc', viewValue: 'DC Comics' },
    { value: 'image', viewValue: 'Image Comics' },
    { value: 'dark-horse', viewValue: 'Dark Horse Comics' },
    { value: 'idw', viewValue: 'IDW Publishing' },
    { value: 'other', viewValue: 'Otro' },
  ];

  ngOnInit(): void {
    this.heroForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      powerstats: this.fb.group({
        intelligence: [
          50,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
        strength: [
          50,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
        speed: [
          50,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
        durability: [
          50,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
        power: [
          50,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
        combat: [
          50,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
      }),
      firstAppearance: ['', Validators.required],
      publisher: ['', Validators.required],
      biography: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  foods: Food[] = [
    { value: 'dc', viewValue: 'DC' },
    { value: 'marvel', viewValue: 'Marvel' },
    { value: 'giant-man', viewValue: 'Giant-Man' },
    { value: 'oracle', viewValue: 'Oracle' },
  ];

  onSubmit(): void {
    console.log(this.heroForm.valid);
    console.log(this.heroForm.value);
  }
}
