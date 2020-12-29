import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../environments/environment';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    constructor(private translate: TranslateService) {
        this.initTranslate();
    }

    initTranslate() {
        // Set the default language for translation strings, and the current language.
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang(environment.defaultLanguage);
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        } else {
            this.translate.use(environment.defaultLanguage); // Set your language here
        }
    }

}
