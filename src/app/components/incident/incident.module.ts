import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../../models/model.module";
import { PartialsModule } from '../partials/partials.module';
import { ListComponent } from "./list.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, PartialsModule],
    declarations: [ListComponent ],
    exports : [ListComponent]
})

export class IncidentModule {}