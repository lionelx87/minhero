import { Component, inject, input, output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
import { Hero, Powerstat } from '@core/models';

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
  formValid = signal<boolean>(false);
  heroSubmit = output<Partial<Hero>>();
  heroUpdate = output<Hero>();
  hero = input<Hero>();
  editMode = false;

  onCancel = output<void>();

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
    { value: 'Marvel Comics', viewValue: 'Marvel Comics' },
    { value: 'DC Comics', viewValue: 'DC Comics' },
    { value: 'Giant-Man', viewValue: 'Giant-Man' },
    { value: 'Oraclee', viewValue: 'Oracle' },
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
    this.setupFormSignalSync();

    if (this.hero()) {
      this.editMode = true;
      this.heroForm.patchValue({
        name: this.hero()!.name,
        powerstats: this.hero()!.powerstats,
        firstAppearance: this.hero()!.firstAppearance,
        publisher: this.hero()!.publisher,
        biography: this.hero()!.biography,
        image: this.hero()!.image,
      });
      this.intelligence.set(this.hero()!.powerstats.intelligence);
      this.strength.set(this.hero()!.powerstats.strength);
      this.speed.set(this.hero()!.powerstats.speed);
      this.durability.set(this.hero()!.powerstats.durability);
      this.power.set(this.hero()!.powerstats.power);
      this.combat.set(this.hero()!.powerstats.combat);
    }
  }

  private setupFormSignalSync(): void {
    this.heroForm.statusChanges.pipe().subscribe((status) => {
      this.formValid.set(status === 'VALID');
    });
  }

  onSubmit(): void {
    if (this.heroForm.valid) {
      const formValue = this.heroForm.value;
      if (this.hero()) {
        const heroData: Hero = {
          ...formValue,
          id: this.hero()?.id,
        };
        this.heroUpdate.emit(heroData);
      } else {
        const heroData: Partial<Hero> = {
          ...formValue,
        };
        this.heroSubmit.emit(heroData);
        return;
      }
    }
    this.heroForm.markAllAsTouched();
  }
}
