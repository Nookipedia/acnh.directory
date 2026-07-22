import { Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
  { path: '', component: DirectoryComponent },
  { path: 'privacy', component: PrivacyComponent }
];
