import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { AboutPage } from '../pages/about/about.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'About',
    component: AboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
