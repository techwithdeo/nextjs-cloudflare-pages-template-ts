declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "development" | "production";
			PORT?: string;
			PWD: string;
			MY_VAR: string;
		}
	}
}

export type {};
