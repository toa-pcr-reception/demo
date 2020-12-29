import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../environments/environment';
import {NgForm} from '@angular/forms';
import {LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(private translate: TranslateService,
                private loadingController: LoadingController) {
        this.initTranslate();
    }

    initTranslate() {
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang(environment.defaultLanguage);
        this.translate.use(environment.defaultLanguage);
        // if (this.translate.getBrowserLang() !== undefined) {
        //     this.translate.use(this.translate.getBrowserLang());
        // } else {
        //     this.translate.use(environment.defaultLanguage); // Set your language here
        // }
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
