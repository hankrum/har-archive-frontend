import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HarFile } from "./models/harFile";
import { Path } from "./models/path";
import { ApiService } from "./services/apiservice.service";

@Component({
    selector: 'upload-file',
    templateUrl: './uploadfile.component.html',
    styleUrls: ['./uploadfile.component.scss']
})
export class UploadFileComponent {
    @ViewChild('uploadForm') uploadForm!: NgForm;
    
    fileNamesList: string[] = [];
    content: string = '';
    fileList: File[] = [];
    harFileList: HarFile[] = [];

    constructor(private apiService: ApiService) { }

    async onFilesSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        const files = input.files;

        if (!files) {
            return;
        }

        this.fileNamesList = this.getFileLists(files);
        this.content = await files[0].text();
    }

    getFileLists(fileList: FileList | null): string[] {
        // TODO: filter extensions other than .har
        if (!fileList) {
            return [];
        }

        const nameList: string[] = [];

        for (let i = 0; i < fileList.length; i++) {
            const file = fileList[i];
            nameList.push(file.name);
            this.fileList.push(file);
        }

        return nameList;
    }

    async onSubmit(path: string) {
        for (let i = 0; i < this.fileList.length; i++) {
            const file = this.fileList[i]
            const content = await file.text();
            var harFile = new HarFile(new Path(path), file.name, content);
            this.harFileList.push(harFile);
        }        
        this.uploadForm.reset();
        this.uploadForm.resetForm();
        this.apiService.sendFiles(this.harFileList);
    }

    formReset(formValue: any) {
        formValue = '';
    }
}
