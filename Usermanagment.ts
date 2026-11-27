import { authntication } from "./Litarel";

export {};

type User = {
  id: number;
  name: string;
  role: "admin" | "user" | "moderator";
  isActive: boolean;
  email?: string;
};

const user: User = {
  id: 101,
  name: "Niloy",
  role: "admin",
  isActive: true,
  email: "niloy@example.com",
};

type UserPersonalInfo = {
  name: string;
  age: number;
};

type DeveloperInfo = {
  skills: string[];
  experience: number;
};

type fullDevoloper = UserPersonalInfo & DeveloperInfo;

const FullstackDevoloper: fullDevoloper = {
  name: "Liton Ahmed Niloy",
  age: 24,
  skills: ["html", "react", "js", "css", "nextjs", "typescript"],
  experience: 4,
};authntication = 'jisan'

