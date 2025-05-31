import { EisenSwapCompleted as EisenSwapCompletedEvent } from "../generated/eisen-diamond/eisen-diamond"
import { EisenSwapCompleted } from "../generated/schema"

export function handleEisenSwapCompleted(event: EisenSwapCompletedEvent): void {
  let entity = new EisenSwapCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.fromAssetId = event.params.fromAssetId
  entity.toAssetId = event.params.toAssetId
  entity.receiver = event.params.receiver
  entity.fromAmount = event.params.fromAmount
  entity.toAmount = event.params.toAmount
  entity.expectedToAmount = event.params.expectedToAmount
  entity.fee = event.params.fee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
