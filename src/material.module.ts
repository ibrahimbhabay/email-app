import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
    ]
})

export class MaterialModule {}
