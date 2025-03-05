import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import { whatsabi } from '@shazow/whatsabi';
import fs from 'fs/promises';
import path from 'path';

const main = async () => {
  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  });

  const result = await whatsabi.autoload('0x4545a7aa2B8126751C106dc940AB9F2f788eD55F', {
    provider: client,
    ...whatsabi.loaders.defaultsWithEnv({
      ETHERSCAN_API_KEY: 'XXX-XXX-XXXXXX-XXX-XXXXXX-XXX-XXXXXX-XXX-XXXXXX-XXX-XXX',
      ETHERSCAN_BASE_URL: 'https://api.arbiscan.io/api',
    }),
  });

  await fs.writeFile(path.join(__dirname, 'meta', 'abi.json'), JSON.stringify(result.abi, null, 4), 'utf-8');
};

main();
