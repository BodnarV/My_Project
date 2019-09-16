import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SampleComponent } from './sample.component';
import { UsersComponent } from 'app/layout/components/content/users/users.component';

import { ComponentsComponent } from 'app/@fuse/Login/components.component';
import { RegistComponent } from 'app/@fuse/regist/regist.component';
import { EditUserComponent } from 'app/layout/components/content/edit-user/edit-user.component';


const routes = [
    {
        path     : 'sample',
        component: SampleComponent
    },
    {
        path     : 'users',
        component: UsersComponent 
    },
    {
        path     : 'login',
        component: ComponentsComponent
    },
    {
        path     : 'register',
        component: RegistComponent
    },
    {
        path     : 'edit',
        component: EditUserComponent
    }
];

@NgModule({ 
    declarations: [ 
        SampleComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}
