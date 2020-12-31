import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    selectedLan = null;

    constructor(private translateService: TranslateService) {
        this.selectedLan = environment.defaultLanguage
    }

    changeLan() {
        this.translateService.use(this.selectedLan)
    }
}
