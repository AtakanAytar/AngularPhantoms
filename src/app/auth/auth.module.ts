import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { SignInComponent } from "./signin.component";
// import { SignUpComponent } from "./signup.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [SignInComponent ],
    exports : [SignInComponent ]
})

export class AuthModule {}
