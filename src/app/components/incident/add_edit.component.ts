import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Incident } from "../../models/incident.model";
import { IncidentRepository } from "../../models/incident.repository";

@Component({
    selector: "add-edit",
    templateUrl: "add_edit.component.html"
})

export class AddEditComponent {
    
    title:string = 'Add a new Item';
    editing: boolean = false;
    item: Incident = new Incident();

    constructor(private repository: IncidentRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 
        // Delete
        if (activeRoute.snapshot.params["mode"] == "delete") {
            this.deleteItem(activeRoute.snapshot.params["id"]);
        }

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        // Edit
        if (this.editing) {
            this.item = this.repository.getItem(activeRoute.snapshot.params["id"]);
        } 

    }

    save(form: NgForm) {
        this.repository.saveIncident(this.item);
        this.router.navigateByUrl("incident/list");                
    }

    private deleteItem(id: string){
        this.repository.deleteIncident(id);
        this.router.navigateByUrl("incident/list");
    }
    
}