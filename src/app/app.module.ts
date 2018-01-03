import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AdminGuard } from './admin/services/admin-guard.service';
import { AppComponent } from './app.component';
import { AuthComponent } from './core/components/auth/auth.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';

// import { DataTableModule } from 'angular-4-data-table/src/index';




@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
   // DataTableModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'login', component: AuthComponent }
     ])
  ],
  providers: [  AdminGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
