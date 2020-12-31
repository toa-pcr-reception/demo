import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs-routing.module';

import {TabsPage} from './tabs.page';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        HttpClientModule,
        TranslateModule,
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
