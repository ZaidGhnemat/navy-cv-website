import { Routes } from '@angular/router';
import { NavyLife } from './LifeInTheNavyComponent/navy-life/navy-life';
import { TrustSignals } from './TrustSignalsComponent/trust-signals/trust-signals';
import { EligibilityRequirements } from './EligibilityRequirementsComponent/eligibility-requirements/eligibility-requirements';
import { ValueProposition } from './ValuePropositionComponent/value-proposition/value-proposition';
import { Faq } from './FAQComponent/faq/faq';
import { Form } from './FormComponent/form/form';
import { HomeComponent } from './Home/home-component/home-component';
import { Applicants } from './ApplicantsComponent/applicants/applicants';
import { Login } from './LoginComponent/login/login';
import { MainLayout } from './Layout/main-layout/main-layout';

export const routes: Routes = [

    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'about',
                component: Applicants
            },
            {
                path: 'navyLife',
                component: NavyLife
            },
            {
                path: 'EligibilityRequirements',
                component: EligibilityRequirements
            },
            {
                path: 'trustSignals',
                component: TrustSignals
            },
            {
                path: 'valueProposition',
                component: ValueProposition
            },
            {
                path: 'faq',
                component: Faq
            },
            {
                path: 'form',
                component: Form
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }

];
