export class GetOffersDto {
    startLat: number;
    startLong: number;
    startAdddress: string;
    startCountry: string;
    endLat: number;
    endLong: number;
    endAddress: string;
    endCountry: string;
    distance: number;
    userId: string;
    providerList: Array<string>;
    nbrOfPassenger: number;
    token: string;
}