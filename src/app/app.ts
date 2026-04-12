import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./Header/header/header";
import { TrustSignals } from "./TrustSignalsComponent/trust-signals/trust-signals";
import { ValueProposition } from "./ValuePropositionComponent/value-proposition/value-proposition";
import { NavyLife } from './LifeInTheNavyComponent/navy-life/navy-life';
import { EligibilityRequirements } from './EligibilityRequirementsComponent/eligibility-requirements/eligibility-requirements';
import { Form } from './FormComponent/form/form';
import { Faq } from './FAQComponent/faq/faq';
import { Footer } from './FooterComponent/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TrustSignals, ValueProposition,NavyLife,EligibilityRequirements,Form,Faq,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('navy-cv-website');
  
}
