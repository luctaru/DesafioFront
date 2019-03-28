export interface Plans {
    name: string;
    type: string;
    user: object;
    status: number;
    parent: number;
    beginData: string;
    endData: string;
    childs: Array<any>;
    description: string;
    stakeholders: Array<any>;
    cost: number;
    id: number;
}
