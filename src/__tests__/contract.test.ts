import { Filter } from 'ethers';
import { erc } from '../contracts';

describe('ERC20', function () {
	it('should update the value and return the receipt', async function () {
		const newValue = 'New Test Value';
		const txMock = { wait: async () => ({ transactionHash: 'mockedTransactionHash' }) };
		const contractMock = {
			update: async (newValue: string) => txMock,
			filters: { 'UpdatedMessages(string,string)': 'mockedFilter' },
			on: (filter: Filter, callback: (...vals: string[]) => void) => {
				expect(filter).toEqual('mockedFilter');
				callback('Old Value', newValue);
			}
		};

		//@ts-ignore
		erc.contract = contractMock;

		const receipt = await erc.update(newValue);

		expect(receipt).toEqual({ transactionHash: 'mockedTransactionHash' });
	});
});
