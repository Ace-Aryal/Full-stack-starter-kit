class ApiError extends Error {
  status: number;
  errors: string[];
  success: boolean;
  constructor({
    message,
    status,
    errors = [],
    success = false,
  }: {
    message: string;
    status: number;
    errors?: string[];
    success?: boolean;
  }) {
    super(message);
    this.status = status;
    this.errors = errors;
    this.success = success;
  }
}
export { ApiError };
