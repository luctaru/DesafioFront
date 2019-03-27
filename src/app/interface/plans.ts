export interface Plans {
    name: string;
    type: string;
    user: object;
    status: number;
    beginData: string;
    endData: string;
    childs: Array<any>;
    description: string;
    stakeholders: Array<any>;
    cost: number;
    id: number;
}
