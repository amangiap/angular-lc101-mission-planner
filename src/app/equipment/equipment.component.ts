import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipmentArray: object[] = [
    {item: "Habitat dome"},
    {item: "Drones"},
    {item: "Food containers"},
    {item: "Oxygen tanks"}
  ]

  constructor() { }

  ngOnInit() {
  }
//   add(equipmentName: string: boolean) {
//     this.equipment.push({name: memberName, firstMission: isFirst});
//   }
//   remove(member: object) {
//     let index = this.crew.indexOf(member);
//     this.crew.splice(index, 1);
//   }
//   memberBeingEdited: object = null;
//   edit(member: object) {
//     this.memberBeingEdited = member;
//  }
//  save(name: string, member: object) {
//   member['name'] = name;
//   this.memberBeingEdited = null;
//   }
}
