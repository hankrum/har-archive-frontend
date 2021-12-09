import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from './preview.component';
import { UploadFileComponent } from './uploadfile.component';

const routes: Routes = [
  { path: "", redirectTo: "/upload", pathMatch: 'full' },
  { path: "upload", component: UploadFileComponent },
  { path: "preview", component: PreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
