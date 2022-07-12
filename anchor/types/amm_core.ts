export type AmmCore = {
  "version": "0.1.0",
  "name": "amm_core",
  "instructions": [
    {
      "name": "createAmmConfig",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "protocolFeeRate",
          "type": "u32"
        }
      ]
    },
    {
      "name": "setNewOwner",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "newOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createFeeAccount",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fee",
          "type": "u32"
        },
        {
          "name": "tickSpacing",
          "type": "u16"
        }
      ]
    },
    {
      "name": "createPool",
      "accounts": [
        {
          "name": "poolCreator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint0",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint1",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "initialFirstObservation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "sqrtPriceX64",
          "type": "u128"
        }
      ]
    },
    {
      "name": "resetSqrtPrice",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "sqrtPriceX64",
          "type": "u128"
        }
      ]
    },
    {
      "name": "initializeReward",
      "accounts": [
        {
          "name": "rewardFunder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "funderTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "param",
          "type": {
            "defined": "InitializeRewardParam"
          }
        }
      ]
    },
    {
      "name": "updateRewardInfos",
      "accounts": [
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "collectRewards",
      "accounts": [
        {
          "name": "ownerOrDelegate",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setRewardEmissions",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u8"
        },
        {
          "name": "emissionsPerSecondX64",
          "type": "u128"
        }
      ]
    },
    {
      "name": "increaseObservation",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "observationAccountBumps",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "setProtocolFeeRate",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "protocolFeeRate",
          "type": "u32"
        }
      ]
    },
    {
      "name": "collectProtocolFee",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount0Requested",
          "type": "u64"
        },
        {
          "name": "amount1Requested",
          "type": "u64"
        }
      ]
    },
    {
      "name": "openPosition",
      "accounts": [
        {
          "name": "minter",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "positionNftOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "positionNftMint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "positionNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lastObservation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tickLowerIndex",
          "type": "i32"
        },
        {
          "name": "tickUpperIndex",
          "type": "i32"
        },
        {
          "name": "wordLowerIndex",
          "type": "i16"
        },
        {
          "name": "wordUpperIndex",
          "type": "i16"
        },
        {
          "name": "amount0Desired",
          "type": "u64"
        },
        {
          "name": "amount1Desired",
          "type": "u64"
        },
        {
          "name": "amount0Min",
          "type": "u64"
        },
        {
          "name": "amount1Min",
          "type": "u64"
        }
      ]
    },
    {
      "name": "increaseLiquidity",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lastObservation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount0Desired",
          "type": "u64"
        },
        {
          "name": "amount1Desired",
          "type": "u64"
        },
        {
          "name": "amount0Min",
          "type": "u64"
        },
        {
          "name": "amount1Min",
          "type": "u64"
        }
      ]
    },
    {
      "name": "decreaseLiquidity",
      "accounts": [
        {
          "name": "ownerOrDelegate",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lastObservation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidity",
          "type": "u128"
        },
        {
          "name": "amount0Min",
          "type": "u64"
        },
        {
          "name": "amount1Min",
          "type": "u64"
        }
      ]
    },
    {
      "name": "collectFee",
      "accounts": [
        {
          "name": "ownerOrDelegate",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lastObservation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount0Max",
          "type": "u64"
        },
        {
          "name": "amount1Max",
          "type": "u64"
        }
      ]
    },
    {
      "name": "swap",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "inputTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "outputTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "inputVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "outputVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lastObservation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "otherAmountThreshold",
          "type": "u64"
        },
        {
          "name": "sqrtPriceLimitX64",
          "type": "u128"
        },
        {
          "name": "isBaseInput",
          "type": "bool"
        }
      ]
    },
    {
      "name": "swapRouterBaseIn",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "amountOutMinimum",
          "type": "u64"
        },
        {
          "name": "additionalAccountsPerPool",
          "type": "bytes"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "ammConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "protocolFeeRate",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "feeState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "fee",
            "type": "u32"
          },
          {
            "name": "tickSpacing",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "observationState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "blockTimestamp",
            "type": "u32"
          },
          {
            "name": "tickCumulative",
            "type": "i64"
          },
          {
            "name": "secondsPerLiquidityCumulativeX64",
            "type": "u128"
          },
          {
            "name": "initialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "personalPositionState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "poolId",
            "type": "publicKey"
          },
          {
            "name": "tickLower",
            "type": "i32"
          },
          {
            "name": "tickUpper",
            "type": "i32"
          },
          {
            "name": "liquidity",
            "type": "u128"
          },
          {
            "name": "feeGrowthInside0Last",
            "type": "u128"
          },
          {
            "name": "feeGrowthInside1Last",
            "type": "u128"
          },
          {
            "name": "tokenFeesOwed0",
            "type": "u64"
          },
          {
            "name": "tokenFeesOwed1",
            "type": "u64"
          },
          {
            "name": "rewardInfos",
            "type": {
              "array": [
                {
                  "defined": "PositionRewardInfo"
                },
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "poolState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "ammConfig",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "tokenMint0",
            "type": "publicKey"
          },
          {
            "name": "tokenMint1",
            "type": "publicKey"
          },
          {
            "name": "tokenVault0",
            "type": "publicKey"
          },
          {
            "name": "tokenVault1",
            "type": "publicKey"
          },
          {
            "name": "feeRate",
            "type": "u32"
          },
          {
            "name": "tickSpacing",
            "type": "u16"
          },
          {
            "name": "liquidity",
            "type": "u128"
          },
          {
            "name": "sqrtPriceX64",
            "type": "u128"
          },
          {
            "name": "tick",
            "type": "i32"
          },
          {
            "name": "observationIndex",
            "type": "u16"
          },
          {
            "name": "observationCardinality",
            "type": "u16"
          },
          {
            "name": "observationCardinalityNext",
            "type": "u16"
          },
          {
            "name": "feeGrowthGlobal0",
            "type": "u128"
          },
          {
            "name": "feeGrowthGlobal1",
            "type": "u128"
          },
          {
            "name": "protocolFeesToken0",
            "type": "u64"
          },
          {
            "name": "protocolFeesToken1",
            "type": "u64"
          },
          {
            "name": "rewardLastUpdatedTimestamp",
            "type": "u64"
          },
          {
            "name": "rewardInfos",
            "type": {
              "array": [
                {
                  "defined": "RewardInfo"
                },
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "procotolPositionState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "liquidity",
            "type": "u128"
          },
          {
            "name": "feeGrowthInside0Last",
            "type": "u128"
          },
          {
            "name": "feeGrowthInside1Last",
            "type": "u128"
          },
          {
            "name": "tokenFeesOwed0",
            "type": "u64"
          },
          {
            "name": "tokenFeesOwed1",
            "type": "u64"
          },
          {
            "name": "rewardGrowthInside",
            "type": {
              "array": [
                "u128",
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "tickBitmapState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "wordPos",
            "type": "i16"
          },
          {
            "name": "word",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "tickState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "tick",
            "type": "i32"
          },
          {
            "name": "liquidityNet",
            "type": "i128"
          },
          {
            "name": "liquidityGross",
            "type": "u128"
          },
          {
            "name": "feeGrowthOutside0X64",
            "type": "u128"
          },
          {
            "name": "feeGrowthOutside1X64",
            "type": "u128"
          },
          {
            "name": "tickCumulativeOutside",
            "type": "i64"
          },
          {
            "name": "secondsPerLiquidityOutsideX64",
            "type": "u128"
          },
          {
            "name": "secondsOutside",
            "type": "u32"
          },
          {
            "name": "rewardGrowthsOutside",
            "type": {
              "array": [
                "u128",
                3
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitializeRewardParam",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardIndex",
            "type": "u8"
          },
          {
            "name": "openTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          },
          {
            "name": "emissionsPerSecondX64",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "PositionRewardInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "growthInsideLast",
            "type": "u128"
          },
          {
            "name": "rewardAmountOwed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "RewardInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardState",
            "type": "u8"
          },
          {
            "name": "openTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          },
          {
            "name": "lastUpdateTime",
            "type": "u64"
          },
          {
            "name": "emissionsPerSecondX64",
            "type": "u128"
          },
          {
            "name": "rewardTotalEmissioned",
            "type": "u64"
          },
          {
            "name": "rewardClaimed",
            "type": "u64"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "tokenVault",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "rewardGrowthGlobalX64",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "RewardState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Uninitialized"
          },
          {
            "name": "Initialized"
          },
          {
            "name": "Opening"
          },
          {
            "name": "Ended"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "CreateConfigEvent",
      "fields": [
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "protocolFeeRate",
          "type": "u32",
          "index": false
        }
      ]
    },
    {
      "name": "OwnerChangedEvent",
      "fields": [
        {
          "name": "oldOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newOwner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "SetProtocolFeeRateEvent",
      "fields": [
        {
          "name": "protocolFeeRateOld",
          "type": "u32",
          "index": false
        },
        {
          "name": "protocolFeeRateNew",
          "type": "u32",
          "index": false
        }
      ]
    },
    {
      "name": "CreateFeeAccountEvent",
      "fields": [
        {
          "name": "fee",
          "type": "u32",
          "index": false
        },
        {
          "name": "tickSpacing",
          "type": "u16",
          "index": false
        }
      ]
    },
    {
      "name": "IncreaseObservationCardinalityNext",
      "fields": [
        {
          "name": "observationCardinalityNextOld",
          "type": "u16",
          "index": false
        },
        {
          "name": "observationCardinalityNextNew",
          "type": "u16",
          "index": false
        }
      ]
    },
    {
      "name": "IncreaseLiquidityEvent",
      "fields": [
        {
          "name": "positionNftMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "liquidity",
          "type": "u128",
          "index": false
        },
        {
          "name": "amount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "DecreaseLiquidityEvent",
      "fields": [
        {
          "name": "positionNftMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "liquidity",
          "type": "u128",
          "index": false
        },
        {
          "name": "amount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CollectPersonalFeeEvent",
      "fields": [
        {
          "name": "positionNftMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "recipientTokenAccount0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "recipientTokenAccount1",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "UpdateRewardInfosEvent",
      "fields": [
        {
          "name": "rewardInfos",
          "type": {
            "array": [
              {
                "defined": "RewardInfo"
              },
              3
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "PoolCreatedEvent",
      "fields": [
        {
          "name": "tokenMint0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint1",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "fee",
          "type": "u32",
          "index": false
        },
        {
          "name": "tickSpacing",
          "type": "u16",
          "index": false
        },
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "sqrtPriceX64",
          "type": "u128",
          "index": false
        },
        {
          "name": "tick",
          "type": "i32",
          "index": false
        },
        {
          "name": "tokenVault0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenVault1",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "CollectProtocolFeeEvent",
      "fields": [
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "recipientTokenAccount0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "recipientTokenAccount1",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "SwapEvent",
      "fields": [
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "sender",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenAccount0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenAccount1",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount0",
          "type": "i64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "i64",
          "index": false
        },
        {
          "name": "sqrtPriceX64",
          "type": "u128",
          "index": false
        },
        {
          "name": "liquidity",
          "type": "u128",
          "index": false
        },
        {
          "name": "tick",
          "type": "i32",
          "index": false
        }
      ]
    },
    {
      "name": "CreatePersonalPositionEvent",
      "fields": [
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "minter",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nftOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tickLower",
          "type": "i32",
          "index": false
        },
        {
          "name": "tickUpper",
          "type": "i32",
          "index": false
        },
        {
          "name": "liquidity",
          "type": "u128",
          "index": false
        },
        {
          "name": "depositAmount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "depositAmount1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "BurnEvent",
      "fields": [
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tickLower",
          "type": "i32",
          "index": false
        },
        {
          "name": "tickUpper",
          "type": "i32",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CollectFeeEvent",
      "fields": [
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tickLower",
          "type": "i32",
          "index": false
        },
        {
          "name": "tickUpper",
          "type": "i32",
          "index": false
        },
        {
          "name": "collectAmount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "collectAmount1",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "LOK",
      "msg": "LOK"
    },
    {
      "code": 6001,
      "name": "NotApproved",
      "msg": "Not approved"
    },
    {
      "code": 6002,
      "name": "ClosePositionErr",
      "msg": "Remove liquitity, collect fees owed and reward then you can close position account"
    },
    {
      "code": 6003,
      "name": "ZeroMintAmount",
      "msg": "Minting amount should be greater than 0"
    },
    {
      "code": 6004,
      "name": "InvaildTickIndex",
      "msg": "Tick index of lower must be smaller than upper"
    },
    {
      "code": 6005,
      "name": "TickInvaildOrder",
      "msg": "The lower tick must be below the upper tick"
    },
    {
      "code": 6006,
      "name": "TickLowerOverflow",
      "msg": "The tick must be greater, or equal to the minimum tick(-221818)"
    },
    {
      "code": 6007,
      "name": "TickUpperOverflow",
      "msg": "The tick must be lesser than, or equal to the maximum tick(221818)"
    },
    {
      "code": 6008,
      "name": "TickAndSpacingNotMatch",
      "msg": "tick % tick_spacing must be zero"
    },
    {
      "code": 6009,
      "name": "SqrtPriceLimitOverflow",
      "msg": "Square root price limit overflow"
    },
    {
      "code": 6010,
      "name": "SqrtPriceX64",
      "msg": "sqrt_price_x64 out of range"
    },
    {
      "code": 6011,
      "name": "LiquiditySubValueErr",
      "msg": "Liquidity sub delta L must be smaller than before"
    },
    {
      "code": 6012,
      "name": "LiquidityAddValueErr",
      "msg": "Liquidity add delta L must be greater, or equal to before"
    },
    {
      "code": 6013,
      "name": "InvaildLiquidity",
      "msg": "Invaild liquidity when update position"
    },
    {
      "code": 6014,
      "name": "TransactionTooOld",
      "msg": "Transaction too old"
    },
    {
      "code": 6015,
      "name": "PriceSlippageCheck",
      "msg": "Price slippage check"
    },
    {
      "code": 6016,
      "name": "TooLittleOutputReceived",
      "msg": "Too little output received"
    },
    {
      "code": 6017,
      "name": "TooMuchInputPaid",
      "msg": "Too much input paid"
    },
    {
      "code": 6018,
      "name": "InvaildSwapAmountSpecified",
      "msg": "Swap special amount can not be zero"
    },
    {
      "code": 6019,
      "name": "InvalidRewardIndex",
      "msg": "Invalid reward index"
    },
    {
      "code": 6020,
      "name": "InvalidRewardInitParam",
      "msg": "Invalid reward init param"
    },
    {
      "code": 6021,
      "name": "InvalidRewardDesiredAmount",
      "msg": "Invalid collect reward desired amount"
    },
    {
      "code": 6022,
      "name": "InvalidRewardInputAccountNumber",
      "msg": "Invalid collect reward input account number"
    },
    {
      "code": 6023,
      "name": "UnInitializedRewardInfo",
      "msg": "uninitialized reward info"
    }
  ]
};

export const IDL: AmmCore = {
  "version": "0.1.0",
  "name": "amm_core",
  "instructions": [
    {
      "name": "createAmmConfig",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "protocolFeeRate",
          "type": "u32"
        }
      ]
    },
    {
      "name": "setNewOwner",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "newOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createFeeAccount",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fee",
          "type": "u32"
        },
        {
          "name": "tickSpacing",
          "type": "u16"
        }
      ]
    },
    {
      "name": "createPool",
      "accounts": [
        {
          "name": "poolCreator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint0",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint1",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "initialFirstObservation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "sqrtPriceX64",
          "type": "u128"
        }
      ]
    },
    {
      "name": "resetSqrtPrice",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "sqrtPriceX64",
          "type": "u128"
        }
      ]
    },
    {
      "name": "initializeReward",
      "accounts": [
        {
          "name": "rewardFunder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "funderTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rewardTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "param",
          "type": {
            "defined": "InitializeRewardParam"
          }
        }
      ]
    },
    {
      "name": "updateRewardInfos",
      "accounts": [
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "collectRewards",
      "accounts": [
        {
          "name": "ownerOrDelegate",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setRewardEmissions",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u8"
        },
        {
          "name": "emissionsPerSecondX64",
          "type": "u128"
        }
      ]
    },
    {
      "name": "increaseObservation",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "observationAccountBumps",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "setProtocolFeeRate",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "protocolFeeRate",
          "type": "u32"
        }
      ]
    },
    {
      "name": "collectProtocolFee",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount0Requested",
          "type": "u64"
        },
        {
          "name": "amount1Requested",
          "type": "u64"
        }
      ]
    },
    {
      "name": "openPosition",
      "accounts": [
        {
          "name": "minter",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "positionNftOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "positionNftMint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "positionNftAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lastObservation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tickLowerIndex",
          "type": "i32"
        },
        {
          "name": "tickUpperIndex",
          "type": "i32"
        },
        {
          "name": "wordLowerIndex",
          "type": "i16"
        },
        {
          "name": "wordUpperIndex",
          "type": "i16"
        },
        {
          "name": "amount0Desired",
          "type": "u64"
        },
        {
          "name": "amount1Desired",
          "type": "u64"
        },
        {
          "name": "amount0Min",
          "type": "u64"
        },
        {
          "name": "amount1Min",
          "type": "u64"
        }
      ]
    },
    {
      "name": "increaseLiquidity",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lastObservation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount0Desired",
          "type": "u64"
        },
        {
          "name": "amount1Desired",
          "type": "u64"
        },
        {
          "name": "amount0Min",
          "type": "u64"
        },
        {
          "name": "amount1Min",
          "type": "u64"
        }
      ]
    },
    {
      "name": "decreaseLiquidity",
      "accounts": [
        {
          "name": "ownerOrDelegate",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lastObservation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidity",
          "type": "u128"
        },
        {
          "name": "amount0Min",
          "type": "u64"
        },
        {
          "name": "amount1Min",
          "type": "u64"
        }
      ]
    },
    {
      "name": "collectFee",
      "accounts": [
        {
          "name": "ownerOrDelegate",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "personalPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "protocolPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bitmapUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lastObservation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount0",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokenAccount1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount0Max",
          "type": "u64"
        },
        {
          "name": "amount1Max",
          "type": "u64"
        }
      ]
    },
    {
      "name": "swap",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "inputTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "outputTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "inputVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "outputVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lastObservation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "otherAmountThreshold",
          "type": "u64"
        },
        {
          "name": "sqrtPriceLimitX64",
          "type": "u128"
        },
        {
          "name": "isBaseInput",
          "type": "bool"
        }
      ]
    },
    {
      "name": "swapRouterBaseIn",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "inputTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "amountOutMinimum",
          "type": "u64"
        },
        {
          "name": "additionalAccountsPerPool",
          "type": "bytes"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "ammConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "protocolFeeRate",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "feeState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "fee",
            "type": "u32"
          },
          {
            "name": "tickSpacing",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "observationState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "index",
            "type": "u16"
          },
          {
            "name": "blockTimestamp",
            "type": "u32"
          },
          {
            "name": "tickCumulative",
            "type": "i64"
          },
          {
            "name": "secondsPerLiquidityCumulativeX64",
            "type": "u128"
          },
          {
            "name": "initialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "personalPositionState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "poolId",
            "type": "publicKey"
          },
          {
            "name": "tickLower",
            "type": "i32"
          },
          {
            "name": "tickUpper",
            "type": "i32"
          },
          {
            "name": "liquidity",
            "type": "u128"
          },
          {
            "name": "feeGrowthInside0Last",
            "type": "u128"
          },
          {
            "name": "feeGrowthInside1Last",
            "type": "u128"
          },
          {
            "name": "tokenFeesOwed0",
            "type": "u64"
          },
          {
            "name": "tokenFeesOwed1",
            "type": "u64"
          },
          {
            "name": "rewardInfos",
            "type": {
              "array": [
                {
                  "defined": "PositionRewardInfo"
                },
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "poolState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "ammConfig",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "tokenMint0",
            "type": "publicKey"
          },
          {
            "name": "tokenMint1",
            "type": "publicKey"
          },
          {
            "name": "tokenVault0",
            "type": "publicKey"
          },
          {
            "name": "tokenVault1",
            "type": "publicKey"
          },
          {
            "name": "feeRate",
            "type": "u32"
          },
          {
            "name": "tickSpacing",
            "type": "u16"
          },
          {
            "name": "liquidity",
            "type": "u128"
          },
          {
            "name": "sqrtPriceX64",
            "type": "u128"
          },
          {
            "name": "tick",
            "type": "i32"
          },
          {
            "name": "observationIndex",
            "type": "u16"
          },
          {
            "name": "observationCardinality",
            "type": "u16"
          },
          {
            "name": "observationCardinalityNext",
            "type": "u16"
          },
          {
            "name": "feeGrowthGlobal0",
            "type": "u128"
          },
          {
            "name": "feeGrowthGlobal1",
            "type": "u128"
          },
          {
            "name": "protocolFeesToken0",
            "type": "u64"
          },
          {
            "name": "protocolFeesToken1",
            "type": "u64"
          },
          {
            "name": "rewardLastUpdatedTimestamp",
            "type": "u64"
          },
          {
            "name": "rewardInfos",
            "type": {
              "array": [
                {
                  "defined": "RewardInfo"
                },
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "procotolPositionState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "liquidity",
            "type": "u128"
          },
          {
            "name": "feeGrowthInside0Last",
            "type": "u128"
          },
          {
            "name": "feeGrowthInside1Last",
            "type": "u128"
          },
          {
            "name": "tokenFeesOwed0",
            "type": "u64"
          },
          {
            "name": "tokenFeesOwed1",
            "type": "u64"
          },
          {
            "name": "rewardGrowthInside",
            "type": {
              "array": [
                "u128",
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "tickBitmapState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "wordPos",
            "type": "i16"
          },
          {
            "name": "word",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "tickState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "tick",
            "type": "i32"
          },
          {
            "name": "liquidityNet",
            "type": "i128"
          },
          {
            "name": "liquidityGross",
            "type": "u128"
          },
          {
            "name": "feeGrowthOutside0X64",
            "type": "u128"
          },
          {
            "name": "feeGrowthOutside1X64",
            "type": "u128"
          },
          {
            "name": "tickCumulativeOutside",
            "type": "i64"
          },
          {
            "name": "secondsPerLiquidityOutsideX64",
            "type": "u128"
          },
          {
            "name": "secondsOutside",
            "type": "u32"
          },
          {
            "name": "rewardGrowthsOutside",
            "type": {
              "array": [
                "u128",
                3
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitializeRewardParam",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardIndex",
            "type": "u8"
          },
          {
            "name": "openTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          },
          {
            "name": "emissionsPerSecondX64",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "PositionRewardInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "growthInsideLast",
            "type": "u128"
          },
          {
            "name": "rewardAmountOwed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "RewardInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardState",
            "type": "u8"
          },
          {
            "name": "openTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          },
          {
            "name": "lastUpdateTime",
            "type": "u64"
          },
          {
            "name": "emissionsPerSecondX64",
            "type": "u128"
          },
          {
            "name": "rewardTotalEmissioned",
            "type": "u64"
          },
          {
            "name": "rewardClaimed",
            "type": "u64"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "tokenVault",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "rewardGrowthGlobalX64",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "RewardState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Uninitialized"
          },
          {
            "name": "Initialized"
          },
          {
            "name": "Opening"
          },
          {
            "name": "Ended"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "CreateConfigEvent",
      "fields": [
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "protocolFeeRate",
          "type": "u32",
          "index": false
        }
      ]
    },
    {
      "name": "OwnerChangedEvent",
      "fields": [
        {
          "name": "oldOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newOwner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "SetProtocolFeeRateEvent",
      "fields": [
        {
          "name": "protocolFeeRateOld",
          "type": "u32",
          "index": false
        },
        {
          "name": "protocolFeeRateNew",
          "type": "u32",
          "index": false
        }
      ]
    },
    {
      "name": "CreateFeeAccountEvent",
      "fields": [
        {
          "name": "fee",
          "type": "u32",
          "index": false
        },
        {
          "name": "tickSpacing",
          "type": "u16",
          "index": false
        }
      ]
    },
    {
      "name": "IncreaseObservationCardinalityNext",
      "fields": [
        {
          "name": "observationCardinalityNextOld",
          "type": "u16",
          "index": false
        },
        {
          "name": "observationCardinalityNextNew",
          "type": "u16",
          "index": false
        }
      ]
    },
    {
      "name": "IncreaseLiquidityEvent",
      "fields": [
        {
          "name": "positionNftMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "liquidity",
          "type": "u128",
          "index": false
        },
        {
          "name": "amount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "DecreaseLiquidityEvent",
      "fields": [
        {
          "name": "positionNftMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "liquidity",
          "type": "u128",
          "index": false
        },
        {
          "name": "amount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CollectPersonalFeeEvent",
      "fields": [
        {
          "name": "positionNftMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "recipientTokenAccount0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "recipientTokenAccount1",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "UpdateRewardInfosEvent",
      "fields": [
        {
          "name": "rewardInfos",
          "type": {
            "array": [
              {
                "defined": "RewardInfo"
              },
              3
            ]
          },
          "index": false
        }
      ]
    },
    {
      "name": "PoolCreatedEvent",
      "fields": [
        {
          "name": "tokenMint0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint1",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "fee",
          "type": "u32",
          "index": false
        },
        {
          "name": "tickSpacing",
          "type": "u16",
          "index": false
        },
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "sqrtPriceX64",
          "type": "u128",
          "index": false
        },
        {
          "name": "tick",
          "type": "i32",
          "index": false
        },
        {
          "name": "tokenVault0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenVault1",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "CollectProtocolFeeEvent",
      "fields": [
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "recipientTokenAccount0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "recipientTokenAccount1",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "SwapEvent",
      "fields": [
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "sender",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenAccount0",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenAccount1",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount0",
          "type": "i64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "i64",
          "index": false
        },
        {
          "name": "sqrtPriceX64",
          "type": "u128",
          "index": false
        },
        {
          "name": "liquidity",
          "type": "u128",
          "index": false
        },
        {
          "name": "tick",
          "type": "i32",
          "index": false
        }
      ]
    },
    {
      "name": "CreatePersonalPositionEvent",
      "fields": [
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "minter",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "nftOwner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tickLower",
          "type": "i32",
          "index": false
        },
        {
          "name": "tickUpper",
          "type": "i32",
          "index": false
        },
        {
          "name": "liquidity",
          "type": "u128",
          "index": false
        },
        {
          "name": "depositAmount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "depositAmount1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "BurnEvent",
      "fields": [
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tickLower",
          "type": "i32",
          "index": false
        },
        {
          "name": "tickUpper",
          "type": "i32",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount1",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "CollectFeeEvent",
      "fields": [
        {
          "name": "poolState",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tickLower",
          "type": "i32",
          "index": false
        },
        {
          "name": "tickUpper",
          "type": "i32",
          "index": false
        },
        {
          "name": "collectAmount0",
          "type": "u64",
          "index": false
        },
        {
          "name": "collectAmount1",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "LOK",
      "msg": "LOK"
    },
    {
      "code": 6001,
      "name": "NotApproved",
      "msg": "Not approved"
    },
    {
      "code": 6002,
      "name": "ClosePositionErr",
      "msg": "Remove liquitity, collect fees owed and reward then you can close position account"
    },
    {
      "code": 6003,
      "name": "ZeroMintAmount",
      "msg": "Minting amount should be greater than 0"
    },
    {
      "code": 6004,
      "name": "InvaildTickIndex",
      "msg": "Tick index of lower must be smaller than upper"
    },
    {
      "code": 6005,
      "name": "TickInvaildOrder",
      "msg": "The lower tick must be below the upper tick"
    },
    {
      "code": 6006,
      "name": "TickLowerOverflow",
      "msg": "The tick must be greater, or equal to the minimum tick(-221818)"
    },
    {
      "code": 6007,
      "name": "TickUpperOverflow",
      "msg": "The tick must be lesser than, or equal to the maximum tick(221818)"
    },
    {
      "code": 6008,
      "name": "TickAndSpacingNotMatch",
      "msg": "tick % tick_spacing must be zero"
    },
    {
      "code": 6009,
      "name": "SqrtPriceLimitOverflow",
      "msg": "Square root price limit overflow"
    },
    {
      "code": 6010,
      "name": "SqrtPriceX64",
      "msg": "sqrt_price_x64 out of range"
    },
    {
      "code": 6011,
      "name": "LiquiditySubValueErr",
      "msg": "Liquidity sub delta L must be smaller than before"
    },
    {
      "code": 6012,
      "name": "LiquidityAddValueErr",
      "msg": "Liquidity add delta L must be greater, or equal to before"
    },
    {
      "code": 6013,
      "name": "InvaildLiquidity",
      "msg": "Invaild liquidity when update position"
    },
    {
      "code": 6014,
      "name": "TransactionTooOld",
      "msg": "Transaction too old"
    },
    {
      "code": 6015,
      "name": "PriceSlippageCheck",
      "msg": "Price slippage check"
    },
    {
      "code": 6016,
      "name": "TooLittleOutputReceived",
      "msg": "Too little output received"
    },
    {
      "code": 6017,
      "name": "TooMuchInputPaid",
      "msg": "Too much input paid"
    },
    {
      "code": 6018,
      "name": "InvaildSwapAmountSpecified",
      "msg": "Swap special amount can not be zero"
    },
    {
      "code": 6019,
      "name": "InvalidRewardIndex",
      "msg": "Invalid reward index"
    },
    {
      "code": 6020,
      "name": "InvalidRewardInitParam",
      "msg": "Invalid reward init param"
    },
    {
      "code": 6021,
      "name": "InvalidRewardDesiredAmount",
      "msg": "Invalid collect reward desired amount"
    },
    {
      "code": 6022,
      "name": "InvalidRewardInputAccountNumber",
      "msg": "Invalid collect reward input account number"
    },
    {
      "code": 6023,
      "name": "UnInitializedRewardInfo",
      "msg": "uninitialized reward info"
    }
  ]
};