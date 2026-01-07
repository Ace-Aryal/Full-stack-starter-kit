class ApiResponse<T> {
  status: number = 200;
  message: string = "success";
  data: T;
  success = true;
  constructor({
    status = 200,
    message = "success",
    data,
    success = true,
  }: {
    status: number;
    message: string;
    data: T;
    success?: boolean;
  }) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success = success;
  }
}
