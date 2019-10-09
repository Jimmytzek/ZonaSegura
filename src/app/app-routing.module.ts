import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'entrada', pathMatch: 'full' },
  { path: 'entrada', loadChildren: './entrada/entrada.module#EntradaPageModule' },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'list-alta', loadChildren: './list-alta/list-alta.module#ListAltaPageModule' },
  { path: 'modal-map-proterritorio', loadChildren: './modal-map-proterritorio/modal-map-proterritorio.module#ModalMapProterritorioPageModule' },
  { path: 'modal-caribe', loadChildren: './modal-caribe/modal-caribe.module#ModalCaribePageModule' },
  { path: 'modal-map-caribe', loadChildren: './modal-map-caribe/modal-map-caribe.module#ModalMapCaribePageModule' },
  { path: 'modal-adolfo-lopez-mateos', loadChildren: './modal-adolfo-lopez-mateos/modal-adolfo-lopez-mateos.module#ModalAdolfoLopezMateosPageModule' },
  { path: 'moda-map-adolfo-lopez-mateos', loadChildren: './moda-map-adolfo-lopez-mateos/moda-map-adolfo-lopez-mateos.module#ModaMapAdolfoLopezMateosPageModule' },
  { path: 'modal-payo-obispo', loadChildren: './modal-payo-obispo/modal-payo-obispo.module#ModalPayoObispoPageModule' },
  { path: 'modal-map-payo-obispo', loadChildren: './modal-map-payo-obispo/modal-map-payo-obispo.module#ModalMapPayoObispoPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
