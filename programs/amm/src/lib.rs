pub mod error;
pub mod instructions;
pub mod libraries;
pub mod states;
pub mod util;

use anchor_lang::prelude::*;
use instructions::*;
use states::*;
use util::access_control::*;

#[cfg(feature = "devnet")]
declare_id!("devi51mZmdwUJGU9hjN27vEz64Gps7uUefqxg27EAtH");
#[cfg(not(feature = "devnet"))]
declare_id!("CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK");

pub mod admin {
    use anchor_lang::prelude::declare_id;
    #[cfg(feature = "devnet")]
    declare_id!("adMCyoCgfkg7bQiJ9aBJ59H3BXLY3r5LNLfPpQfMzBe");
    #[cfg(not(feature = "devnet"))]
    declare_id!("GThUX1Atko4tqhN2NaiTazWSeFWMuiUvfFnyJyUghFMJ");
}

#[program]
pub mod amm_v3 {

    use super::*;

    // The configuation of AMM protocol, include trade fee and protocol fee
    /// # Arguments
    ///
    /// * `ctx`- The accounts needed by instruction.
    /// * `index` - The index of amm config, there may be multiple config.
    /// * `tick_spacing` - The tickspacing binding with config, cannot be changed.
    /// * `trade_fee_rate` - Trade fee rate, can be changed.
    /// * `protocol_fee_rate` - The rate of protocol fee within tarde fee.
    /// * `fund_fee_rate` - The rate of fund fee within tarde fee.
    ///
    pub fn create_amm_config(
        ctx: Context<CreateAmmConfig>,
        index: u16,
        tick_spacing: u16,
        trade_fee_rate: u32,
        protocol_fee_rate: u32,
        fund_fee_rate: u32,
    ) -> Result<()> {
        assert!(trade_fee_rate < FEE_RATE_DENOMINATOR_VALUE);
        assert!(protocol_fee_rate <= FEE_RATE_DENOMINATOR_VALUE);
        assert!(fund_fee_rate <= FEE_RATE_DENOMINATOR_VALUE);
        assert!(fund_fee_rate + protocol_fee_rate <= FEE_RATE_DENOMINATOR_VALUE);
        instructions::create_amm_config(
            ctx,
            index,
            tick_spacing,
            trade_fee_rate,
            protocol_fee_rate,
            fund_fee_rate,
        )
    }

    /// Updates the owner of the amm config
    /// Must be called by the current owner or admin
    ///
    /// # Arguments
    ///
    /// * `ctx`- The context of accounts
    /// * `trade_fee_rate`- The new trade fee rate of amm config, be set when `param` is 0
    /// * `protocol_fee_rate`- The new protocol fee rate of amm config, be set when `param` is 1
    /// * `fund_fee_rate`- The new fund fee rate of amm config, be set when `param` is 2
    /// * `new_owner`- The config's new owner, be set when `param` is 3
    /// * `new_fund_owner`- The config's new fund owner, be set when `param` is 4
    /// * `param`- The vaule can be 0 | 1 | 2 | 3 | 4, otherwise will report a error
    ///
    pub fn update_amm_config(ctx: Context<UpdateAmmConfig>, param: u8, value: u32) -> Result<()> {
        instructions::update_amm_config(ctx, param, value)
    }

    /// Creates a pool for the given token pair and the initial price
    ///
    /// # Arguments
    ///
    /// * `ctx`- The context of accounts
    /// * `sqrt_price_x64` - the initial sqrt price (amount_token_1 / amount_token_0) of the pool as a Q64.64
    ///
    pub fn create_pool(
        ctx: Context<CreatePool>,
        sqrt_price_x64: u128,
        open_time: u64,
    ) -> Result<()> {
        instructions::create_pool(ctx, sqrt_price_x64, open_time)
    }

    /// Update pool status for given vaule
    ///
    /// # Arguments
    ///
    /// * `ctx`- The context of accounts
    /// * `status` - The vaule of status
    ///
    pub fn update_pool_status(ctx: Context<UpdatePoolStatus>, status: u8) -> Result<()> {
        instructions::update_pool_status(ctx, status)
    }

    /// Creates an operation account for the program
    ///
    /// # Arguments
    ///
    /// * `ctx`- The context of accounts
    ///
    pub fn create_operation_account(ctx: Context<CreateOperationAccount>) -> Result<()> {
        instructions::create_operation_account(ctx)
    }

    /// Update the operation account
    ///
    /// # Arguments
    ///
    /// * `ctx`- The context of accounts
    /// * `param`- The vaule can be 0 | 1 | 2 | 3, otherwise will report a error
    /// * `keys`- update operation owner when the `param` is 0
    ///           remove operation owner when the `param` is 1
    ///           update whitelist mint when the `param` is 2
    ///           remove whitelist mint when the `param` is 3
    ///
    pub fn update_operation_account(
        ctx: Context<UpdateOperationAccount>,
        param: u8,
        keys: Vec<Pubkey>,
    ) -> Result<()> {
        instructions::update_operation_account(ctx, param, keys)
    }

    /// Transfer reward owner
    ///
    /// # Arguments
    ///
    /// * `ctx`- The context of accounts
    /// * `new_owner`- new owner pubkey
    ///
    pub fn transfer_reward_owner<'a, 'b, 'c, 'info>(
        ctx: Context<'a, 'b, 'c, 'info, TransferRewardOwner<'info>>,
        new_owner: Pubkey,
    ) -> Result<()> {
        instructions::transfer_reward_owner(ctx, new_owner)
    }

    /// Initialize a reward info for a given pool and reward index
    ///
    /// # Arguments
    ///
    /// * `ctx`- The context of accounts
    /// * `reward_index` - the index to reward info
    /// * `open_time` - reward open timestamp
    /// * `end_time` - reward end timestamp
    /// * `emissions_per_second_x64` - Token reward per second are earned per unit of liquidity.
    ///
    pub fn initialize_reward(
        ctx: Context<InitializeReward>,
        param: InitializeRewardParam,
    ) -> Result<()> {
        instructions::initialize_reward(ctx, param)
    }

    /// Collect remaining reward token for reward founder
    ///
    /// # Arguments
    ///
    /// * `ctx`- The context of accounts
    /// * `reward_index` - the index to reward info
    ///
    pub fn collect_remaining_rewards(
        ctx: Context<CollectRemainingRewards>,
        reward_index: u8,
    ) -> Result<()> {
        instructions::collect_remaining_rewards(ctx, reward_index)
    }

    /// Update rewards info of the given pool, can be called for everyone
    ///
    /// # Arguments
    ///
    /// * `ctx`- The context of accounts
    ///
    pub fn update_reward_infos<'a, 'b, 'c, 'info>(
        ctx: Context<'a, 'b, 'c, 'info, UpdateRewardInfos<'info>>,
    ) -> Result<()> {
        instructions::update_reward_infos(ctx)
    }

    /// Restset reward param, start a new reward cycle or extend the current cycle.
    ///
    /// # Arguments
    ///
    /// * `ctx` - The context of accounts
    /// * `reward_index` - The index of reward token in the pool.
    /// * `emissions_per_second_x64` - The per second emission reward, when extend the current cycle,
    ///    new value can't be less than old value
    /// * `open_time` - reward open timestamp, must be set when state a new cycle
    /// * `end_time` - reward end timestamp
    ///
    pub fn set_reward_params<'a, 'b, 'c, 'info>(
        ctx: Context<'a, 'b, 'c, 'info, SetRewardParams<'info>>,
        reward_index: u8,
        emissions_per_second_x64: u128,
        open_time: u64,
        end_time: u64,
    ) -> Result<()> {
        instructions::set_reward_params(
            ctx,
            reward_index,
            emissions_per_second_x64,
            open_time,
            end_time,
        )
    }

    /// Collect the protocol fee accrued to the pool
    ///
    /// # Arguments
    ///
    /// * `ctx` - The context of accounts
    /// * `amount_0_requested` - The maximum amount of token_0 to send, can be 0 to collect fees in only token_1
    /// * `amount_1_requested` - The maximum amount of token_1 to send, can be 0 to collect fees in only token_0
    ///
    pub fn collect_protocol_fee(
        ctx: Context<CollectProtocolFee>,
        amount_0_requested: u64,
        amount_1_requested: u64,
    ) -> Result<()> {
        instructions::collect_protocol_fee(ctx, amount_0_requested, amount_1_requested)
    }

    /// Collect the fund fee accrued to the pool
    ///
    /// # Arguments
    ///
    /// * `ctx` - The context of accounts
    /// * `amount_0_requested` - The maximum amount of token_0 to send, can be 0 to collect fees in only token_1
    /// * `amount_1_requested` - The maximum amount of token_1 to send, can be 0 to collect fees in only token_0
    ///
    pub fn collect_fund_fee(
        ctx: Context<CollectFundFee>,
        amount_0_requested: u64,
        amount_1_requested: u64,
    ) -> Result<()> {
        instructions::collect_fund_fee(ctx, amount_0_requested, amount_1_requested)
    }

    /// Creates a new position wrapped in a NFT
    ///
    /// # Arguments
    ///
    /// * `ctx` - The context of accounts
    /// * `tick_lower_index` - The low boundary of market
    /// * `tick_upper_index` - The upper boundary of market
    /// * `tick_array_lower_start_index` - The start index of tick array which include tick low
    /// * `tick_array_upper_start_index` - The start index of tick array which include tick upper
    /// * `liquidity` - The liquidity to be added
    /// * `amount_0_max` - The max amount of token_0 to spend, which serves as a slippage check
    /// * `amount_1_max` - The max amount of token_1 to spend, which serves as a slippage check
    ///
    pub fn open_position<'a, 'b, 'c, 'info>(
        ctx: Context<'a, 'b, 'c, 'info, OpenPosition<'info>>,
        tick_lower_index: i32,
        tick_upper_index: i32,
        tick_array_lower_start_index: i32,
        tick_array_upper_start_index: i32,
        liquidity: u128,
        amount_0_max: u64,
        amount_1_max: u64,
    ) -> Result<()> {
        let open_position_param = &mut OpenPositionParam {
            payer: &mut ctx.accounts.payer,
            position_nft_owner: &ctx.accounts.position_nft_owner,
            position_nft_mint: &mut ctx.accounts.position_nft_mint,
            position_nft_account: &mut ctx.accounts.position_nft_account,
            metadata_account: &mut ctx.accounts.metadata_account,
            pool_state: &mut ctx.accounts.pool_state,
            protocol_position: &mut ctx.accounts.protocol_position,
            tick_array_lower: &mut ctx.accounts.tick_array_lower,
            tick_array_upper: &mut ctx.accounts.tick_array_upper,
            personal_position: &mut ctx.accounts.personal_position,
            token_account_0: &mut ctx.accounts.token_account_0,
            token_account_1: &mut ctx.accounts.token_account_1,
            token_vault_0: &mut ctx.accounts.token_vault_0,
            token_vault_1: &mut ctx.accounts.token_vault_1,
            rent: ctx.accounts.rent.clone(),
            system_program: ctx.accounts.system_program.clone(),
            token_program: ctx.accounts.token_program.clone(),
            associated_token_program: ctx.accounts.associated_token_program.clone(),
            metadata_program: ctx.accounts.metadata_program.clone(),
            token_program_2022: None,
            vault_0_mint: None,
            vault_1_mint: None,
        };
        instructions::open_position(
            open_position_param,
            &ctx.bumps,
            liquidity,
            amount_0_max,
            amount_1_max,
            tick_lower_index,
            tick_upper_index,
            tick_array_lower_start_index,
            tick_array_upper_start_index,
            None,
        )
    }

    /// Creates a new position wrapped in a NFT, support Token2022
    ///
    /// # Arguments
    ///
    /// * `ctx` - The context of accounts
    /// * `tick_lower_index` - The low boundary of market
    /// * `tick_upper_index` - The upper boundary of market
    /// * `tick_array_lower_start_index` - The start index of tick array which include tick low
    /// * `tick_array_upper_start_index` - The start index of tick array which include tick upper
    /// * `liquidity` - The liquidity to be added, if zero, calculate liquidity base amount_0_max or amount_1_max according base_flag
    /// * `amount_0_max` - The max amount of token_0 to spend, which serves as a slippage check
    /// * `amount_1_max` - The max amount of token_1 to spend, which serves as a slippage check
    /// * `base_flag` - must be special if liquidity is zero, false: calculate liquidity base amount_0_max otherwise base amount_1_max
    ///
    pub fn open_position_v2<'a, 'b, 'c, 'info>(
        ctx: Context<'a, 'b, 'c, 'info, OpenPositionV2<'info>>,
        tick_lower_index: i32,
        tick_upper_index: i32,
        tick_array_lower_start_index: i32,
        tick_array_upper_start_index: i32,
        liquidity: u128,
        amount_0_max: u64,
        amount_1_max: u64,
        base_flag: Option<bool>,
    ) -> Result<()> {
        if liquidity == 0 {
            assert!(base_flag.is_some());
        }
        let open_position_param = &mut OpenPositionParam {
            payer: &mut ctx.accounts.payer,
            position_nft_owner: &ctx.accounts.position_nft_owner,
            position_nft_mint: &mut ctx.accounts.position_nft_mint,
            position_nft_account: &mut ctx.accounts.position_nft_account,
            metadata_account: &mut ctx.accounts.metadata_account,
            pool_state: &mut ctx.accounts.pool_state,
            protocol_position: &mut ctx.accounts.protocol_position,
            tick_array_lower: &mut ctx.accounts.tick_array_lower,
            tick_array_upper: &mut ctx.accounts.tick_array_upper,
            personal_position: &mut ctx.accounts.personal_position,
            token_account_0: &mut ctx.accounts.token_account_0,
            token_account_1: &mut ctx.accounts.token_account_1,
            token_vault_0: &mut ctx.accounts.token_vault_0,
            token_vault_1: &mut ctx.accounts.token_vault_1,
            rent: ctx.accounts.rent.clone(),
            system_program: ctx.accounts.system_program.clone(),
            token_program: ctx.accounts.token_program.clone(),
            associated_token_program: ctx.accounts.associated_token_program.clone(),
            metadata_program: ctx.accounts.metadata_program.clone(),
            token_program_2022: Some(ctx.accounts.token_program_2022.clone()),
            vault_0_mint: Some(ctx.accounts.vault_0_mint.clone()),
            vault_1_mint: Some(ctx.accounts.vault_1_mint.clone()),
        };
        instructions::open_position(
            open_position_param,
            &ctx.bumps,
            liquidity,
            amount_0_max,
            amount_1_max,
            tick_lower_index,
            tick_upper_index,
            tick_array_lower_start_index,
            tick_array_upper_start_index,
            base_flag,
        )
    }

    /// Close a position, the nft mint and nft account
    ///
    /// # Arguments
    ///
    /// * `ctx` - The context of accounts
    ///
    pub fn close_position<'a, 'b, 'c, 'info>(
        ctx: Context<'a, 'b, 'c, 'info, ClosePosition<'info>>,
    ) -> Result<()> {
        instructions::close_position(ctx)
    }

    /// Increases liquidity with a exist position, with amount paid by `payer`
    ///
    /// # Arguments
    ///
    /// * `ctx` - The context of accounts
    /// * `liquidity` - The desired liquidity to be added, can't be zero
    /// * `amount_0_max` - The max amount of token_0 to spend, which serves as a slippage check
    /// * `amount_1_max` - The max amount of token_1 to spend, which serves as a slippage check
    ///
    #[access_control(is_authorized_for_token(&ctx.accounts.nft_owner, &ctx.accounts.nft_account))]
    pub fn increase_liquidity<'a, 'b, 'c, 'info>(
        ctx: Context<'a, 'b, 'c, 'info, IncreaseLiquidity<'info>>,
        liquidity: u128,
        amount_0_max: u64,
        amount_1_max: u64,
    ) -> Result<()> {
        assert!(liquidity != 0);
        let increase_liquidity_param = &mut IncreaseLiquidityParam {
            nft_owner: &ctx.accounts.nft_owner,
            nft_account: &mut ctx.accounts.nft_account,
            pool_state: &mut ctx.accounts.pool_state,
            protocol_position: &mut ctx.accounts.protocol_position,
            personal_position: &mut ctx.accounts.personal_position,
            tick_array_lower: &mut ctx.accounts.tick_array_lower,
            tick_array_upper: &mut ctx.accounts.tick_array_upper,
            token_account_0: &mut ctx.accounts.token_account_0,
            token_account_1: &mut ctx.accounts.token_account_1,
            token_vault_0: &mut ctx.accounts.token_vault_0,
            token_vault_1: &mut ctx.accounts.token_vault_1,
            token_program: ctx.accounts.token_program.clone(),
            token_program_2022: None,
            vault_0_mint: None,
            vault_1_mint: None,
        };
        instructions::increase_liquidity(
            increase_liquidity_param,
            liquidity,
            amount_0_max,
            amount_1_max,
            None,
        )
    }

    /// Increases liquidity with a exist position, with amount paid by `payer`, support Token2022
    ///
    /// # Arguments
    ///
    /// * `ctx` - The context of accounts
    /// * `liquidity` - The desired liquidity to be added, if zero, calculate liquidity base amount_0 or amount_1 according base_flag
    /// * `amount_0_max` - The max amount of token_0 to spend, which serves as a slippage check
    /// * `amount_1_max` - The max amount of token_1 to spend, which serves as a slippage check
    /// * `base_flag` - active if liquidity is zero, 0: calculate liquidity base amount_0_max otherwise base amount_1_max
    ///
    #[access_control(is_authorized_for_token(&ctx.accounts.nft_owner, &ctx.accounts.nft_account))]
    pub fn increase_liquidity_v2<'a, 'b, 'c, 'info>(
        ctx: Context<'a, 'b, 'c, 'info, IncreaseLiquidityV2<'info>>,
        liquidity: u128,
        amount_0_max: u64,
        amount_1_max: u64,
        base_flag: Option<bool>,
    ) -> Result<()> {
        if liquidity == 0 {
            assert!(base_flag.is_some());
        }
        let increase_liquidity_param = &mut IncreaseLiquidityParam {
            nft_owner: &ctx.accounts.nft_owner,
            nft_account: &mut ctx.accounts.nft_account,
            pool_state: &mut ctx.accounts.pool_state,
            protocol_position: &mut ctx.accounts.protocol_position,
            personal_position: &mut ctx.accounts.personal_position,
            tick_array_lower: &mut ctx.accounts.tick_array_lower,
            tick_array_upper: &mut ctx.accounts.tick_array_upper,
            token_account_0: &mut ctx.accounts.token_account_0,
            token_account_1: &mut ctx.accounts.token_account_1,
            token_vault_0: &mut ctx.accounts.token_vault_0,
            token_vault_1: &mut ctx.accounts.token_vault_1,
            token_program: ctx.accounts.token_program.clone(),
            token_program_2022: Some(ctx.accounts.token_program_2022.clone()),
            vault_0_mint: Some(ctx.accounts.vault_0_mint.clone()),
            vault_1_mint: Some(ctx.accounts.vault_1_mint.clone()),
        };
        instructions::increase_liquidity(
            increase_liquidity_param,
            liquidity,
            amount_0_max,
            amount_1_max,
            base_flag,
        )
    }

    /// Decreases liquidity with a exist position
    ///
    /// # Arguments
    ///
    /// * `ctx` -  The context of accounts
    /// * `liquidity` - The amount by which liquidity will be decreased
    /// * `amount_0_min` - The minimum amount of token_0 that should be accounted for the burned liquidity
    /// * `amount_1_min` - The minimum amount of token_1 that should be accounted for the burned liquidity
    ///
    #[access_control(is_authorized_for_token(&ctx.accounts.nft_owner, &ctx.accounts.nft_account))]
    pub fn decrease_liquidity<'a, 'b, 'c, 'info>(
        ctx: Context<'a, 'b, 'c, 'info, DecreaseLiquidity<'info>>,
        liquidity: u128,
        amount_0_min: u64,
        amount_1_min: u64,
    ) -> Result<()> {
        let decrease_liquidity_param = &mut DecreaseLiquidityParam {
            nft_owner: &ctx.accounts.nft_owner,
            nft_account: &ctx.accounts.nft_account,
            personal_position: &mut ctx.accounts.personal_position,
            pool_state: &mut ctx.accounts.pool_state,
            protocol_position: &mut ctx.accounts.protocol_position,
            token_vault_0: &mut ctx.accounts.token_vault_0,
            token_vault_1: &mut ctx.accounts.token_vault_1,
            tick_array_lower: &mut ctx.accounts.tick_array_lower,
            tick_array_upper: &mut ctx.accounts.tick_array_upper,
            recipient_token_account_0: &mut ctx.accounts.recipient_token_account_0,
            recipient_token_account_1: &mut ctx.accounts.recipient_token_account_1,
            token_program: ctx.accounts.token_program.clone(),
            token_program_2022: None,
            memo_program: None,
            vault_0_mint: None,
            vault_1_mint: None,
        };

        instructions::decrease_liquidity(
            decrease_liquidity_param,
            ctx.remaining_accounts,
            liquidity,
            amount_0_min,
            amount_1_min,
        )
    }

    /// Decreases liquidity with a exist position, support Token2022
    ///
    /// # Arguments
    ///
    /// * `ctx` -  The context of accounts
    /// * `liquidity` - The amount by which liquidity will be decreased
    /// * `amount_0_min` - The minimum amount of token_0 that should be accounted for the burned liquidity
    /// * `amount_1_min` - The minimum amount of token_1 that should be accounted for the burned liquidity
    ///
    #[access_control(is_authorized_for_token(&ctx.accounts.nft_owner, &ctx.accounts.nft_account))]
    pub fn decrease_liquidity_v2<'a, 'b, 'c, 'info>(
        ctx: Context<'a, 'b, 'c, 'info, DecreaseLiquidityV2<'info>>,
        liquidity: u128,
        amount_0_min: u64,
        amount_1_min: u64,
    ) -> Result<()> {
        let decrease_liquidity_param = &mut DecreaseLiquidityParam {
            nft_owner: &ctx.accounts.nft_owner,
            nft_account: &ctx.accounts.nft_account,
            personal_position: &mut ctx.accounts.personal_position,
            pool_state: &mut ctx.accounts.pool_state,
            protocol_position: &mut ctx.accounts.protocol_position,
            token_vault_0: &mut ctx.accounts.token_vault_0,
            token_vault_1: &mut ctx.accounts.token_vault_1,
            tick_array_lower: &mut ctx.accounts.tick_array_lower,
            tick_array_upper: &mut ctx.accounts.tick_array_upper,
            recipient_token_account_0: &mut ctx.accounts.recipient_token_account_0,
            recipient_token_account_1: &mut ctx.accounts.recipient_token_account_1,
            token_program: ctx.accounts.token_program.clone(),
            token_program_2022: Some(ctx.accounts.token_program_2022.clone()),
            memo_program: Some(ctx.accounts.memo_program.clone()),
            vault_0_mint: Some(ctx.accounts.vault_0_mint.clone()),
            vault_1_mint: Some(ctx.accounts.vault_1_mint.clone()),
        };

        instructions::decrease_liquidity(
            decrease_liquidity_param,
            ctx.remaining_accounts,
            liquidity,
            amount_0_min,
            amount_1_min,
        )
    }

    /// Swaps one token for as much as possible of another token across a single pool
    ///
    /// # Arguments
    ///
    /// * `ctx` - The context of accounts
    /// * `amount` - Arranged in pairs with other_amount_threshold. (amount_in, amount_out_minimum) or (amount_out, amount_in_maximum)
    /// * `other_amount_threshold` - For slippage check
    /// * `sqrt_price_limit` - The Q64.64 sqrt price √P limit. If zero for one, the price cannot
    /// * `is_base_input` - swap base input or swap base output
    ///
    pub fn swap<'a, 'b, 'c, 'info>(
        ctx: Context<'a, 'b, 'c, 'info, SwapSingle<'info>>,
        amount: u64,
        other_amount_threshold: u64,
        sqrt_price_limit_x64: u128,
        is_base_input: bool,
    ) -> Result<()> {
        instructions::swap(
            ctx,
            amount,
            other_amount_threshold,
            sqrt_price_limit_x64,
            is_base_input,
        )
    }

    /// Swaps one token for as much as possible of another token across a single pool, support token program 2022
    ///
    /// # Arguments
    ///
    /// * `ctx` - The context of accounts
    /// * `amount` - Arranged in pairs with other_amount_threshold. (amount_in, amount_out_minimum) or (amount_out, amount_in_maximum)
    /// * `other_amount_threshold` - For slippage check
    /// * `sqrt_price_limit` - The Q64.64 sqrt price √P limit. If zero for one, the price cannot
    /// * `is_base_input` - swap base input or swap base output
    ///
    pub fn swap_v2<'a, 'b, 'c, 'info>(
        ctx: Context<'a, 'b, 'c, 'info, SwapSingleV2<'info>>,
        amount: u64,
        other_amount_threshold: u64,
        sqrt_price_limit_x64: u128,
        is_base_input: bool,
    ) -> Result<()> {
        instructions::swap_v2(
            ctx,
            amount,
            other_amount_threshold,
            sqrt_price_limit_x64,
            is_base_input,
        )
    }

    /// Swap token for as much as possible of another token across the path provided, base input
    ///
    /// # Arguments
    ///
    /// * `ctx` - The context of accounts
    /// * `amount_in` - Token amount to be swapped in
    /// * `amount_out_minimum` - Panic if output amount is below minimum amount. For slippage.
    ///
    pub fn swap_router_base_in<'a, 'b, 'c, 'info>(
        ctx: Context<'a, 'b, 'c, 'info, SwapRouterBaseIn<'info>>,
        amount_in: u64,
        amount_out_minimum: u64,
    ) -> Result<()> {
        instructions::swap_router_base_in(ctx, amount_in, amount_out_minimum)
    }
}
