import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Incident } from "../../models/incident.model";
import { IncidentRepository } from "../../models/incident.repository";

@Component({
    selector: "list-incident",
    templateUrl: "list.component.html"
})

export class ListComponent {

    title = 'Incident List';

    constructor(private repository: IncidentRepository,
        private router: Router) 
    { }

    get inventoryList(): Incident[] {
        return this.repository.getIncident();        
    }
    
}