export class Incident {

    constructor(
        public _id?: string,
        public IncidentExplanation?: string,
        public User?: number,
        public Department?: string[],
        public Solved?: string,
    ){}

}
