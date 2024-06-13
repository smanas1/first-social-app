declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MONGO_URI: string;
      APP_PASS: string;
      API_KEY: string;
      JWT_KEY: string;
      BASE_URL: string;
    }
  }
}
export {};
