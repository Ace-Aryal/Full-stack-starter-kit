import { ZodError } from "zod";
import { AxiosError } from "axios";
import { Prisma } from "../generated/prisma/client.js";

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

export const getErrorMessage = (error: unknown) => {
  if (error instanceof ApiError) {
    return error.message;
  }
  if (error instanceof ZodError) {
    return "Invalid input";
  }

  if (error instanceof AxiosError) {
    return error.response?.data?.message || error.message;
  }

  // Handle Prisma errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // Common Prisma error codes
    switch (error.code) {
      case "P2002":
        return "A record is already in the database with it's unique identifier.";
      case "P2025":
        return "Record not found.";
      case "P2003":
        return "Foreign key constraint failed.";
      case "P2014":
        return "Invalid ID provided.";
      default:
        return `Database error: ${error.message}`;
    }
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    return "Invalid data provided to database.";
  }

  if (error instanceof Prisma.PrismaClientInitializationError) {
    return "Database connection failed.";
  }

  if (error instanceof Error) return error.message;

  return "Internal server error";
};
