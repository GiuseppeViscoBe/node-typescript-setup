// src/db/connect.ts
import { AppDataSource } from "./dataSource";

export const connectDbSql = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log("✅ Connessione al database stabilita.");
  } catch (error) {
    console.error("❌ Errore durante la connessione al DB:", error);
    process.exit(1);
  }
};
