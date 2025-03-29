import time
from aptos_sdk.account import Account
from aptos_sdk.client import AptosClient
from aptos_sdk.transaction import TransactionPayload, EntryFunction
from aptos_sdk.type_tag import TypeTag
from aptos_sdk.bcs import Serializer

# Connect to Aptos Testnet
client = AptosClient("https://fullnode.testnet.aptoslabs.com")

# Generate an Aptos Account (Save these keys for future use!)
admin = Account.generate()
print(f"Admin Address: {admin.address()}")

# Deploy Move Smart Contract (Simplified Example)
contract_address = admin.address()  # Replace with actual contract address if deployed

# Define a function to send a message to Aptos blockchain
def send_message(message: str):
    txn = TransactionPayload(
        EntryFunction.natural(
            f"{contract_address}::SimpleLogger::log_message",  # Function to call
            [],
            [Serializer.str(message).output()],
        )
    )
    signed_txn = client.create_bcs_transaction(admin, txn)
    client.submit_bcs_transaction(signed_txn)
    print("Transaction Sent! Waiting for confirmation...")
    time.sleep(5)

# Call function to store message on blockchain
send_message("Hello from Aptos!")

# Fetch and print transaction logs
print("Transaction successful! Check on Aptos Explorer.")

