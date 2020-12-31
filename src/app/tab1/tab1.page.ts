import {Component} from '@angular/core';
import {environment} from '../../environments/environment';
import {NgForm} from '@angular/forms';
import {LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(private loadingController: LoadingController) {
    }

    reserve(form: NgForm) {
        console.log(form);

    }

    async submit() {
        const loading = await this.loadingController.create({
            message: 'Please wait...',
            duration: 3000
        });

        await loading.present();
    }
}
