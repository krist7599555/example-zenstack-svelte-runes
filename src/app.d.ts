// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      db: import('@prisma-app/client').PrismaClient;
      rawDb: import('@prisma-app/client').PrismaClient; // for auth
      auth: import('@prisma-app/client').Auth | undefined;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
