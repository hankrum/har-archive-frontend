import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';
import { PreviewComponent } from './preview.component';
import { UploadFileComponent } from './uploadfile.component';

const routes: Routes = [
  { path: "", redirectTo: "/upload", pathMatch: 'full' },
  { path: "upload", component: UploadFileComponent, canActivate: [AuthGuard] },
  { path: "preview", component: PreviewComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
