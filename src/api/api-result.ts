export class ApiResult {
  message = '';

  success = false;

  data = null;

  constructor(message = '', status = false, data = null) {
    this.message = message;
    this.success = status;
    this.data = data;
  }
}
