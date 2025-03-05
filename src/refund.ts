import { createWalletClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import { mnemonicToAccount } from 'viem/accounts';
import abi from './meta/abi.json';

const main = async () => {
  const account = mnemonicToAccount('XXX-XXX-XXXXXX-XXX-XXXXXX-XXX-XXXXXX-XXX-XXXXXX-XXX-XXX');

  const walletClient = createWalletClient({
    transport: http('https://mainnet.infura.io/v3/4efa7fb7207e4014ba99906051694b71'),
    account,
  });

  await walletClient.writeContract({
    account,
    address: '0xdaF86076b20b030bA828772AF050320aF2DaB15a',
    abi: abi,
    functionName: 'refund',
    args: ['XXX-XXX-XXXXXX-XXX-XXXXXX-XXX-XXXXXX-XXX-XXXXXX-XXX-XXX'],
    chain: mainnet,
  });
};

main();
