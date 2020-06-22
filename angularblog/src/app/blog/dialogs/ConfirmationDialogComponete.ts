import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl:'ConfirmationDialog.html'
    
})

export class ConfirmationDialogComponent {
    constructor(private dialogRef: MatDialogRef<void>) { 

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    public submit(){
        this.dialogRef.close(true);
    }





}