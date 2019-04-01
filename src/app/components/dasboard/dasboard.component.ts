import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/services/connection/app.service";
import { Plans } from "src/app/interface/plans";

@Component({
  selector: "app-dasboard",
  templateUrl: "./dasboard.component.html",
  styleUrls: ["./dasboard.component.css"]
})
export class DasboardComponent implements OnInit {
  plan: Array<Plans> = [];
  planStatusZero: Array<any> = [];
  planStatusOne: Array<any> = [];
  planStatusTwo: Array<any> = [];
  planStatusThree: Array<any> = [];
  planStatusFour: Array<any> = [];

  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.listPlans().subscribe(e => {
      e.map(s => {
        this.plan.push(s);
        switch (s.status) {
          case 0:
            this.planStatusZero.push(s);
            break;
          case 1:
            this.planStatusOne.push(s);
            break;
          case 2:
            this.planStatusTwo.push(s);
            break;
          case 3:
            this.planStatusThree.push(s);
            break;
          case 4:
            this.planStatusFour.push(s);
            break;
          default:
            break;
        }
      });
    });
  }
}
