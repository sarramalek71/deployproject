import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { GitlabCiComponent } from './gitlab-ci/gitlab-ci.component';
import { StepsComponent } from './steps/steps.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Add this line
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: CallbackComponent },
    { path: 'WelcomePage', component: WelcomePageComponent },  // Welcome page as default

  // {path: 'github-repos', component: GithubReposComponent },
  // { path: 'gitlab-ci', component: GitlabCiComponent }

  {
    path: '',
    component: StepsComponent,
    children: [

      { path: 'github-repos', component: GithubReposComponent },
      { path: 'gitlab-ci', component: GitlabCiComponent },
      // Ajoute tes autres étapes ici
      // { path: 'docker', component: DockerComponent },
      // { path: 'kubernetes', component: KubernetesComponent },
      // { path: 'monitoring', component: MonitoringComponent },
      { path: '', redirectTo: '/github-repos', pathMatch: 'full' }
    ]
  }

];
