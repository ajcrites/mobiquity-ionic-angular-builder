import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { <%= classify(name) %>Page } from './<%= dasherize(name) %>.page';

const routes: Routes = [
  {
    path: '',
    component: <%= classify(name) %>Page,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [<%= classify(name) %>Page],
})
export class <%= classify(name) %>PageModule {}
