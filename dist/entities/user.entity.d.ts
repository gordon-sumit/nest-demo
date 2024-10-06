import { SchoolUsers } from "./schoolUser.entity";
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    isActive: boolean;
    role: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    userSchools: SchoolUsers[];
}
