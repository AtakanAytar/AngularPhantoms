import { Injectable } from "@angular/core";
import { Incident } from "./incident.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class IncidentRepository {

    private incident: Incident[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getIncidentList().subscribe(data => {
            this.incident = data;
        });
    }

    getIncident(): Incident[] {
        return this.incident;
    }

    getItem(id: string): Incident {
        return (this.incident.find(item => item._id === id)!);
    }

    
}