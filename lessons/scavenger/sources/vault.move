module scavenger::vault;

use scavenger::key;
use sui::balance;
use sui::coin;

public struct Vault<phantom T> has key {
  id: UID,
  balance: balance::Balance<T>,
  withdrawal_amount: u64,
  code: u64,
}

public struct AdminCap has key, store {
  id: UID,
  vault_id: ID,
}

public fun new<T>(
  coins: coin::Coin<T>,
  withdrawal_amount: u64,
  code: u64,
  ctx: &mut TxContext,
): AdminCap {
  let new_vault = Vault {
    id: object::new(ctx),
    balance: coin::into_balance(coins),
    withdrawal_amount,
    code,
  };

  let new_admin_cap = AdminCap {
    id: object::new(ctx),
    vault_id: new_vault.id.to_inner(),
  };

  transfer::share_object(new_vault);

  new_admin_cap
}

public fun withdraw<T>(vault: &mut Vault<T>, key: key::Key, ctx: &mut TxContext): coin::Coin<T> {
  assert_valid_key_code(vault, &key);
  key.delete();

  let new_coin = coin::from_balance(
    balance::split(
      &mut vault.balance,
      vault.withdrawal_amount,
    ),
    ctx,
  );
  new_coin
}

public fun empty<T>(vault: Vault<T>, admin_cap: AdminCap, ctx: &mut TxContext): coin::Coin<T> {
  assert_valid_admin_cap(&vault, &admin_cap);

  let AdminCap { id: admin_cap_id, vault_id: _ } = admin_cap;
  admin_cap_id.delete();

  let Vault {
    id,
    balance,
    withdrawal_amount: _,
    code: _,
  } = vault;
  id.delete();

  coin::from_balance(balance, ctx)
}

fun assert_valid_key_code<T>(vault: &Vault<T>, key: &key::Key) {
  assert!(vault.code == key.get_code());
}

fun assert_valid_admin_cap<T>(vault: &Vault<T>, admin_cap: &AdminCap) {
  assert!(vault.id.to_inner() == admin_cap.vault_id);
}
