import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { EisenSwapCompleted } from "../generated/eisen-diamond/eisen-diamond"

export function createEisenSwapCompletedEvent(
  sender: Address,
  fromAssetId: Address,
  toAssetId: Address,
  receiver: Address,
  fromAmount: BigInt,
  toAmount: BigInt,
  expectedToAmount: BigInt,
  fee: BigInt
): EisenSwapCompleted {
  let eisenSwapCompletedEvent = changetype<EisenSwapCompleted>(newMockEvent())

  eisenSwapCompletedEvent.parameters = new Array()

  eisenSwapCompletedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  eisenSwapCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "fromAssetId",
      ethereum.Value.fromAddress(fromAssetId)
    )
  )
  eisenSwapCompletedEvent.parameters.push(
    new ethereum.EventParam("toAssetId", ethereum.Value.fromAddress(toAssetId))
  )
  eisenSwapCompletedEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  eisenSwapCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "fromAmount",
      ethereum.Value.fromUnsignedBigInt(fromAmount)
    )
  )
  eisenSwapCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "toAmount",
      ethereum.Value.fromUnsignedBigInt(toAmount)
    )
  )
  eisenSwapCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "expectedToAmount",
      ethereum.Value.fromUnsignedBigInt(expectedToAmount)
    )
  )
  eisenSwapCompletedEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return eisenSwapCompletedEvent
}
