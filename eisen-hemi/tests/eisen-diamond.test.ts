import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { EisenSwapCompleted } from "../generated/schema"
import { EisenSwapCompleted as EisenSwapCompletedEvent } from "../generated/eisen-diamond/eisen-diamond"
import { handleEisenSwapCompleted } from "../src/eisen-diamond"
import { createEisenSwapCompletedEvent } from "./eisen-diamond-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let fromAssetId = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let toAssetId = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let receiver = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let fromAmount = BigInt.fromI32(234)
    let toAmount = BigInt.fromI32(234)
    let expectedToAmount = BigInt.fromI32(234)
    let fee = BigInt.fromI32(234)
    let newEisenSwapCompletedEvent = createEisenSwapCompletedEvent(
      sender,
      fromAssetId,
      toAssetId,
      receiver,
      fromAmount,
      toAmount,
      expectedToAmount,
      fee
    )
    handleEisenSwapCompleted(newEisenSwapCompletedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("EisenSwapCompleted created and stored", () => {
    assert.entityCount("EisenSwapCompleted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "EisenSwapCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EisenSwapCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fromAssetId",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EisenSwapCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "toAssetId",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EisenSwapCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "receiver",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EisenSwapCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fromAmount",
      "234"
    )
    assert.fieldEquals(
      "EisenSwapCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "toAmount",
      "234"
    )
    assert.fieldEquals(
      "EisenSwapCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "expectedToAmount",
      "234"
    )
    assert.fieldEquals(
      "EisenSwapCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fee",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
