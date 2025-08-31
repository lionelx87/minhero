import {
  Component,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
import { UppercaseInputDirective } from '@shared/directives/uppercase-input.directive';

interface PowerstatConfig {
  key: keyof Powerstat;
  label: string;
}

interface Publisher {
  value: string;
  label: string;
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
    UppercaseInputDirective,
  ],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss',
})
export class HeroFormComponent {
  private readonly fb = inject(FormBuilder);

  powerstatConfigs: PowerstatConfig[] = [
    { key: 'intelligence', label: 'Inteligencia' },
    { key: 'strength', label: 'Fuerza' },
    { key: 'speed', label: 'Velocidad' },
    { key: 'durability', label: 'Resistencia' },
    { key: 'power', label: 'Poder' },
    { key: 'combat', label: 'Combate' },
  ];

  publishers: Publisher[] = [
    { value: 'Marvel Comics', label: 'Marvel Comics' },
    { value: 'DC Comics', label: 'DC Comics' },
    { value: 'Giant-Man', label: 'Giant-Man' },
    { value: 'Oraclee', label: 'Oracle' },
  ];

  heroForm: FormGroup = this.fb.group({
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

  intelligence = signal<number>(50);
  strength = signal<number>(50);
  speed = signal<number>(50);
  durability = signal<number>(50);
  power = signal<number>(50);
  combat = signal<number>(50);

  hero = input<Hero>();

  heroSubmit = output<Partial<Hero>>();
  heroUpdate = output<Hero>();
  onCancel = output<void>();

  statusSig = toSignal(this.heroForm.statusChanges, {
    initialValue: this.heroForm?.status,
  });

  formValid = computed(() => this.statusSig() === 'VALID');

  ngOnInit(): void {
    this.setupEditMode();
  }

  private setupEditMode(): void {
    const hero = this.hero();
    if (!hero) return;
    const { name, powerstats, firstAppearance, publisher, biography, image } =
      hero;
    this.heroForm.patchValue({
      name,
      powerstats,
      firstAppearance,
      publisher,
      biography,
      image,
    });
    const { intelligence, strength, speed, durability, power, combat } =
      powerstats;
    this.intelligence.set(intelligence);
    this.strength.set(strength);
    this.speed.set(speed);
    this.durability.set(durability);
    this.power.set(power);
    this.combat.set(combat);
  }

  onSubmit(): void {
    if (this.heroForm.valid) {
      const formValue = this.heroForm.value;
      const hero = this.hero();
      const heroData = hero
        ? {
            ...formValue,
            id: this.hero()?.id,
          }
        : { ...formValue };
      hero ? this.heroUpdate.emit(heroData) : this.heroSubmit.emit(heroData);
    }
    this.heroForm.markAllAsTouched();
  }
}
