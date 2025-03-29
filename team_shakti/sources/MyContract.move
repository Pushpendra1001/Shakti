module shakti::MyContract {
    use std::signer;
    use std::string::{Self, String};
    use std::vector;
    use aptos_framework::event;
    use aptos_framework::timestamp;
    use aptos_framework::account;  // Add this import

    // Error codes
    const E_ALREADY_BLACKLISTED: u64 = 1;
    const E_NOT_AUTHORIZED: u64 = 2;

    struct Message has key, store {
        content: vector<u8>,
    }

    struct SecurityData has key {
        blacklisted_devices: vector<Device>,
        suspicious_networks: vector<Network>,
        security_events: event::EventHandle<SecurityEvent>
    }

    struct Device has store, drop {
        mac_address: String,
        timestamp: u64,
        reason: String
    }

    struct Network has store, drop {
        bssid: String,
        detection_count: u64,
        last_seen: u64
    }

    struct SecurityEvent has drop, store {
        device_mac: String,
        event_type: String,
        timestamp: u64
    }

    // Public function to store a message
    public entry fun store_message(sender: &signer, message: vector<u8>) {
        let msg = Message { content: message };
        move_to(sender, msg);
    }

    // Public function to read stored messages
    public fun get_message(account: &signer): vector<u8> acquires Message {
        borrow_global<Message>(signer::address_of(account)).content
    }

    // Initialize security monitoring
    public entry fun initialize_security(account_signer: &signer) {
        let addr = signer::address_of(account_signer);
        if (!exists<SecurityData>(addr)) {
            move_to(account_signer, SecurityData {
                blacklisted_devices: vector::empty(),
                suspicious_networks: vector::empty(),
                security_events: account::new_event_handle<SecurityEvent>(account_signer)
            });
        }
    }

    // Add malicious device
    public entry fun add_malicious_device(
        account_signer: &signer,
        mac_address: String,
        reason: String
    ) acquires SecurityData {
        let addr = signer::address_of(account_signer);
        let security_data = borrow_global_mut<SecurityData>(addr);
        
        let device = Device {
            mac_address,
            timestamp: timestamp::now_seconds(),
            reason
        };

        vector::push_back(&mut security_data.blacklisted_devices, device);

        event::emit_event(&mut security_data.security_events, SecurityEvent {
            device_mac: mac_address,
            event_type: string::utf8(b"malicious_device_added"),
            timestamp: timestamp::now_seconds()
        });
    }

    // Add suspicious network
    public entry fun add_suspicious_network(
        account_signer: &signer,
        bssid: String
    ) acquires SecurityData {
        let addr = signer::address_of(account_signer);
        let security_data = borrow_global_mut<SecurityData>(addr);
        
        let network = Network {
            bssid,
            detection_count: 1,
            last_seen: timestamp::now_seconds()
        };

        vector::push_back(&mut security_data.suspicious_networks, network);
    }

    // Check if device is blacklisted
    #[view]
    public fun is_device_blacklisted(addr: address, mac_address: String): bool acquires SecurityData {
        let security_data = borrow_global<SecurityData>(addr);
        let i = 0;
        let len = vector::length(&security_data.blacklisted_devices);
        while (i < len) {
            let device = vector::borrow(&security_data.blacklisted_devices, i);
            if (device.mac_address == mac_address) {
                return true
            };
            i = i + 1;
        };
        false
    }
}
