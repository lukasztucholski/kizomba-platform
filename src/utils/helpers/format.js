export default class format {
  constructor() { }

  static dateFromUnix(timestamp) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('pl-PL', options);
  }

  static dateTimeFromUnix(timestamp) {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('pl-PL', options);
  }

  static dateWithTimeFromString(dateString) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL', options);
  }
}
