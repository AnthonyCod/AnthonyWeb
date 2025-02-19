// src/data.d.ts
declare module "../data" {
    const data: {
      cards: Array<{
        frontIcon: string;
        backIcon: string;
        frontText: string;
        backText: string;
        isFlipped?: boolean;
      }>;
    };
    export default data;
  }
  