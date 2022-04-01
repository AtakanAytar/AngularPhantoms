import { Injectable } from "@angular/core";
import { Incident } from "./incident.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

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

    async saveIncident(item: Incident) {

        if (item._id == null || item._id == "") {
            this.dataSource.insertIncident(item)
                .subscribe(response => {
                    if(response._id) // If API created
                    {
                        this.incident.push(response);
                    }
                    else{ // If API send error.
                        // Convert to ResponseModel to get the error message.
                        let error = response as ResponseModel;  
                        alert(`Error: ${error.message}`);
                    }
                });
        } else {
            this.dataSource.updateIncident(item).subscribe(response => {
                if (response.success) {
                    this.incident.splice(this.incident.
                        findIndex(i => i._id == item._id), 1, item);
                }
                else{
                    alert(`Error: ${response.message}`);
                }        
            });
        }
    }

    deleteIncident(id: string) {
        this.dataSource.deleteIncident(id).subscribe(response => {
            if (response.success) {
                this.incident.splice(this.incident.
                    findIndex(item => item._id == id), 1);                                
            }
            else{
                alert(response.message);
            }
        })
    }

}