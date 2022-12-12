import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerComponent } from './core/components/composer/composer.component';
import { InboxComponent } from './core/components/inbox/inbox.component';
import { SentComponent } from './core/components/sent/sent.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ComposerComponent,
        pathMatch: 'full'
      },
      {
        path: 'composer',
        component: ComposerComponent,
      },
      {
        path: 'inbox',
        component: InboxComponent
      },
      {
        path: 'sent',
        component: SentComponent
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
