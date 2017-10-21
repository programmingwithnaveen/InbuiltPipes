import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
     <h1 class="display-3">Pipes Demo</h1>
  </div>
</div>
<table class="table table-bordered table-striped">
  <thead>
     <tr>
        <th>Pipe Type</th>
        <th>Example</th>
     </tr>
  </thead>
  <tbody>
     <tr>
        <td>UpperCasePipe</td>
        <td> Airline Name - {{Flight.Airline | uppercase}}<br></td>
     </tr>
     <tr>
        <td>LowerCasePipe</td>
        <td> Depart  -  {{Flight.Depart | lowercase |uppercase }}<br></td>
     </tr>
     <tr>
        <td>TitleCasePipe</td>
        <td>  Arrive     -     {{Flight.Arrive | titlecase }}<br></td>
     </tr>
     <tr>
        <td>DecimalPipe</td>
        <td>Passanger Count     -     {{Flight.PassengerCount | number}}<br></td>
     </tr>
     <tr>
        <td>CurrencyPipe</td>
        <td>Economy Seat Cost     -     {{Flight.BusinessSeatCost | currency:'EUR':true:'4.2-2'}}<br></td>
     </tr>
     <tr>
        <td>DatePipe</td>
        <td>Journey Date     -     {{Flight.JourneyDate |date:'short' }}</td>
     </tr>
     <tr>
        <td>PercentPipe</td>
        <td> Percentage on-time     -    {{Flight.PercentageOnTime | percent}} </td>
     </tr>
     <tr>
        <td>JsonPipe</td>
        <td> Flight Data     -     {{Flight | json}}</td>
     </tr>
     <tr>
        <td>DecimalPipe</td>
        <td> Pi     -     {{pi | number:'2.2-2'}}</td>
     </tr>
     <tr>
        <td>SlicePipe</td>
        <td> Alphabet From A to E     -     {{alphabet | slice:0:5 }}</td>
     </tr>
  </tbody>
</table>           
  `
})
export class AppComponent {
  Flight = {
    Airline: 'aa',
    Depart: 'JFK',
    Arrive: 'lax',
    PassengerCount: 2000,
    JourneyDate: Date.now(),
    BusinessSeatCost: 600,
    PercentageOnTime: 0.856
  };
  pi: number = 3.141592;
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';

}
