export interface RentItem {
    name: string;
    rent_price: number;
    manufacture_date: number; // considering timestamp
    taken_by?: string;
}