import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { IncidentRepository } from "./incident.repository";
import { RestDataSource } from "./rest.datasource";

@NgModule({
    imports: [HttpClientModule],
    providers: [
        IncidentRepository,
        RestDataSource     
    ]
})

export class ModelModule { }