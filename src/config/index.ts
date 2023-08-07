import 'dotenv/config';
import { cleanEnv, port, str } from 'envalid';

const env = cleanEnv(process.env, {
	CONTRACT_ADDRESS: str(),
	INFURA_RPC: str(),
	WALLET_PK: str(),

	PORT: port()
});

export const config = {
	CONTRACT_ADDRESS: env.CONTRACT_ADDRESS,
	INFURA_RPC: env.INFURA_RPC,
	WALLET_PK: env.WALLET_PK,

	PORT: env.PORT
};
