export class Flight {
  id: number;
  launchSiteName: string;

  constructor(
    id: number = 0,
    launchSiteName: string = ''
  ){
    this.id = id;
    this.launchSiteName = launchSiteName;
  }
}
