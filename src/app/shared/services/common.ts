import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
    providedIn: 'root'
})

export class Common {
    
    constructor(
        public router: Router
    ) {
        
    }

    public hasError(field: any, submitted: any) {
        console.log('field',field);
        if (field) {
            return (field.invalid && submitted);
        } else {
            return false;
        }
    }

    public hasSuccess(field: any) {
        if (field) {
            return (!field.pristine && field.valid);
        } else {
            return false;
        }
    }
   
}
