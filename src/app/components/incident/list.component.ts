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

    get incidentList(): Incident[] {
        return this.repository.getIncident();        
    }
    deleteMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("incident/delete/"+id);
        }
    }
    
}