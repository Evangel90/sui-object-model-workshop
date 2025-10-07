import { Transaction } from "@mysten/sui/transactions";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { decodeSuiPrivateKey } from "@mysten/sui/cryptography";
import keyPairJson from "../keypair.json";

/**
 *
 * Global variables
 *
 * These variables are used throughout the exercise below.
 *
 */
const { secretKey } = decodeSuiPrivateKey(keyPairJson.privateKey);
const keypair = Ed25519Keypair.fromSecretKey(secretKey);

const PACKAGE_ID = `0xef97bc41cfa119c78905d8385e89b1ee5ce79b244f79834d44be213366dae105`;
const VAULT_ID = `0x30055170c308f9cae917b3bcad0ad02002471fc020c3b725aac2acea254b739d`;

const rpcUrl = getFullnodeUrl("testnet");
const suiClient = new SuiClient({ url: rpcUrl });

/**
 * Scavenger Hunt: Exercise 3
 *
 * In this exercise, you use Sui objects as inputs in a PTB to update the value of a shared object.
 *
 * When finished, run the following command in the scripts directory to test your solution:
 *
 * pnpm scavenger-hunt
 *
 * RESOURCES:
 * - https://sdk.mystenlabs.com/typescript/transaction-building/basics#transactions
 */
const main = async () => {
  /**
   * Task 1:
   *
   * Create a new Transaction instance from the @mysten/sui/transactions module.
   */


  /**
   * Task 2:
   *
   * Create a new key using the `key::new` function.
   */


  /**
   * Task 3:
   *
   * Set the key code correctly using the `key::set_code` function.
   */
  

  /**
   * Task 4:
   *
   * Use the key to withdraw the `Bucket USD` coin from the vault using the `vault::withdraw` function.
   */
  

  /**
   * Task 5:
   *
   * Transfer the `Bucket USD` coin to your account.
   */


  /**
   * Task 6:
   *
   * Sign and execute the transaction using the SuiClient instance created above.
   *
   * Print the result to the console.
   *
   * Resources:
   * - Observing transaction results: https://sdk.mystenlabs.com/typescript/transaction-building/basics#observing-the-results-of-a-transaction
   */


  /**
   * Task 7: Run the script with the command below and ensure it works!
   * 
   * pnpm return-objects
   * 
   * Verify the transaction on the Sui Explorer: https://suiscan.xyz/testnet/home
   */
};

main();
