import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    heroes = [
        { id: 1, name: 'Dr Nice' },
        { id: 2, name: 'Narco' },
        { id: 3, name: 'Bombasto' },
        { id: 4, name: 'Celeritas' },
        { id: 5, name: 'Magneta' },
        { id: 6, name: 'RubberMan' },
        { id: 7, name: 'Dynama' },
        { id: 8, name: 'Dr IQ' },
        { id: 9, name: 'Magma' },
        { id: 10, name: 'Tornado' }
    ];

    constructor(private loadingController: LoadingController, private location: Location) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        var result = prompt('Passwordを入力してください', 'テスト');
        if (result) {
            //入力した場合
        } else {
            this.location.back()
        }
    }

}
