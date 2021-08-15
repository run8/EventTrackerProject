export class Flight {
  id: number;
  launchSiteName: string;
  landSiteName: string;
  launchLatitude: string;
  launchLongitude: string;
  landLatitude: string;
  landLongitude: string;
  // launchDateTime: string | null;
  // landDateTime: string | null;
  comment: string;
  constructor(
    id: number = 0,
    launchSiteName: string = '',
    landSiteName: string = '',
    launchLatitude: string = '',
    launchLongitude: string = '',
    landLatitude: string = '',
    landLongitude: string = '',
    // launchDateTime: string = '',
    // landDateTime: string = '',
    comment: string = ''
  ){
    this.id = id;
    this.launchSiteName = launchSiteName;
    this.landSiteName = landSiteName;
    this.launchLatitude = launchLatitude;
    this.launchLongitude = launchLongitude;
    this.landLatitude = landLatitude;
    this.landLongitude = landLongitude;
    // this.launchDateTime = launchDateTime;
    // this.landDateTime = landDateTime;
    this.comment = comment;
  }
}
