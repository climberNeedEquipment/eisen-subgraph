import { BigInt, Bytes, Address, ethereum } from "@graphprotocol/graph-ts";
import { EisenSwapCompleted as EisenSwapCompletedEvent } from "../generated/Eisen/ExecutorFacet";
import { Swap, Swapper, Token } from "../generated/schema";
import {
  fetchTokenDecimals,
  fetchTokenName,
  fetchTokenSymbol,
} from "./utils/token";

export function handleSwapCompleted(event: EisenSwapCompletedEvent): void {
  // Load or create the swapper entity
  let swapper = Swapper.load(event.params.sender.toHex());
  if (!swapper) {
    swapper = new Swapper(event.params.sender.toHex());
    swapper.transactionCount = BigInt.fromI32(0);
  }

  // Increment transaction count
  swapper.transactionCount = swapper.transactionCount.plus(BigInt.fromI32(1));
  swapper.save();

  // Create the swap entity
  let swap = new Swap(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  swap.sender = swapper.id;
  swap.fromAssetId = event.params.fromAssetId;
  swap.toAssetId = event.params.toAssetId;
  swap.receiver = event.params.receiver;
  swap.fromAmount = event.params.fromAmount;
  swap.toAmount = event.params.toAmount;
  swap.expectedToAmount = event.params.expectedToAmount;
  swap.fee = event.params.fee;
  swap.blockNumber = event.block.number;
  swap.timestamp = event.block.timestamp;

  // Check if event.receipt is null or undefined and set gasUsed
  let gasUsed = BigInt.fromI32(0);
  if (event.receipt !== null) {
    let receipt = event.receipt as ethereum.TransactionReceipt;
    gasUsed = receipt.gasUsed;
  }
  swap.gasUsed = gasUsed;
  swap.gasPrice = event.transaction.gasPrice;
  swap.save();

  // Handle Token entity updates
  handleToken(event.params.fromAssetId, event.params.fromAmount, true);
  handleToken(event.params.toAssetId, event.params.toAmount, false);
}

function handleToken(
  tokenAddress: Bytes,
  amount: BigInt,
  isSell: boolean
): void {
  let token = Token.load(tokenAddress.toHex());
  if (!token) {
    token = new Token(tokenAddress.toHex());
    token.symbol = fetchTokenSymbol(Address.fromBytes(tokenAddress)); // Placeholder, set this appropriately
    token.name = fetchTokenName(Address.fromBytes(tokenAddress)); // Placeholder, set this appropriately
    let tokenDecimals = fetchTokenDecimals(Address.fromBytes(tokenAddress));
    token.decimals = tokenDecimals ? tokenDecimals : BigInt.fromI32(18); // Placeholder, set this appropriately
    token.txCount = BigInt.fromI32(0);
    token.sellVolume = BigInt.fromI32(0);
    token.buyVolume = BigInt.fromI32(0);
  }

  // Increment transaction count
  token.txCount = token.txCount.plus(BigInt.fromI32(1));
  // Update sell or buy volume based on transaction type
  if (isSell) {
    token.sellVolume = token.sellVolume.plus(amount);
  } else {
    token.buyVolume = token.buyVolume.plus(amount);
  }

  token.save();
}
