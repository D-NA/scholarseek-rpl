import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'deskripsi', loadChildren: './deskripsi/deskripsi.module#DeskripsiPageModule' },
  { path: 'pengumuman', loadChildren: './pengumuman/pengumuman.module#PengumumanPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'bantuan', loadChildren: './bantuan/bantuan.module#BantuanPageModule' },
  { path: 'beranda-admin', loadChildren: './beranda-admin/beranda-admin.module#BerandaAdminPageModule' },
  { path: 'deskripsi-admin', loadChildren: './deskripsi-admin/deskripsi-admin.module#DeskripsiAdminPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
