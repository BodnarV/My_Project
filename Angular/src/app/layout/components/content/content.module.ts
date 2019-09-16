import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';


import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
    declarations: [
        ContentComponent,
    
        UsersComponent,
    
        EditUserComponent
    ],
    imports     : [ 
        RouterModule,
        FuseSharedModule,
        
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
