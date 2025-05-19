import { Aerolinea } from "./aerolinea";

export class AerolineaDetail extends Aerolinea {
    flights: Array<Flights> = [];

    constructor(
        id: string,
        airlineName: string,
        country: string,
        city: string,
        address: string,
        identityColor: string,
        slogan: string,
        flights: Array<Flights>
    ){
        super(id, airlineName, country, city, address, identityColor, slogan);
        this.flights = flights;
    }
}