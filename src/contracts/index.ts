import { ethers, InfuraProvider, Signer } from 'ethers';
import { config } from '../config';
import { Test__factory } from './generated/factories/Test__factory';
import { Test } from './generated/Test';

export class ERC20 {
	private provider: InfuraProvider;

	private signer: Signer;

	private contract: Test;

	constructor() {
		this.provider = new ethers.InfuraProvider('goerli', config.INFURA_RPC);
		this.signer = new ethers.Wallet(config.WALLET_PK, this.provider);
		this.contract = Test__factory.connect(config.CONTRACT_ADDRESS, this.signer);

		const filters = this.contract.filters['UpdatedMessages(string,string)'];
		this.contract.on(filters, this.onUpdateMessage);
	}

	public async update(newValue: string) {
		try {
			const tx = await this.contract.update(newValue);
			const receipt = await tx.wait();
			console.log('Transaction Receipt:', receipt);
			return receipt;
		} catch (error) {
			console.error('Error:', error);
		}
	}

	private onUpdateMessage(oldVal: string, newVal: string) {
		console.log('Old Value:', oldVal);
		console.log('New Value:', newVal);
	}
}

export const erc = new ERC20();
