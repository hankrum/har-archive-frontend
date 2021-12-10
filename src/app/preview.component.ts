import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { HarFile } from "./models/harFile";
import { ApiService } from "./services/apiservice.service";

@Component({
    selector: 'preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
    harFiles$!: Observable<HarFile[]>;

    constructor(private apiService: ApiService) { }
    
    preview(path: string){
        this.harFiles$ = this.apiService.getFilesByPath(path);
    }
}