use crate::error::ErrorCode;
use crate::states::*;
use crate::util::{burn, close_spl_account};
use anchor_lang::prelude::*;
use anchor_spl::token::Token;
use anchor_spl::token_interface::{Mint, TokenAccount};

#[derive(Accounts)]
pub struct ClosePosition<'info> {
    /// The position nft owner
    #[account(mut)]
    pub nft_owner: Signer<'info>,

    /// Unique token mint address
    #[account(
      mut,
      address = personal_position.nft_mint,
      mint::token_program = token_program,
    )]
    pub position_nft_mint: Box<InterfaceAccount<'info, Mint>>,

    /// Token account where position NFT will be minted
    #[account(
        mut,
        associated_token::mint = position_nft_mint,
        associated_token::authority = nft_owner,
        constraint = position_nft_account.amount == 1,
        token::token_program = token_program,
    )]
    pub position_nft_account: Box<InterfaceAccount<'info, TokenAccount>>,

    /// To store metaplex metadata
    /// CHECK: Safety check performed inside function body
    // #[account(mut)]
    // pub metadata_account: UncheckedAccount<'info>,

    /// Metadata for the tokenized position
    #[account(
        mut, 
        seeds = [POSITION_SEED.as_bytes(), position_nft_mint.key().as_ref()],
        bump,
        close = nft_owner
    )]
    pub personal_position: Box<Account<'info, PersonalPositionState>>,

    /// Program to create the position manager state account
    pub system_program: Program<'info, System>,
    /// Program to create mint account and mint tokens
    pub token_program: Interface<'info, anchor_spl::token_interface::TokenInterface>,
    // /// Reserved for upgrade
    // pub token_program_2022: Program<'info, Token2022>,
}

pub fn close_position<'a, 'b, 'c, 'info>(
    ctx: Context<'a, 'b, 'c, 'info, ClosePosition<'info>>,
) -> Result<()> {
    Ok(())
}
