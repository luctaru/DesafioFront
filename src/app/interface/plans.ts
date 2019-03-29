export interface Plans {
  id: number;
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
}
