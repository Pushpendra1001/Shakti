module WIDDS::Logger {
    use std::signer;
    use aptos_framework::coin;

    struct ThreatLog has key {
        attack_type: vector<u8>,
        attacker_mac: vector<u8>,
        timestamp: u64,
    }

    public entry fun log_threat(
        sender: &signer,
        attack_type: vector<u8>,
        attacker_mac: vector<u8>,
        timestamp: u64
    ) {
        let log = ThreatLog { attack_type, attacker_mac, timestamp };
        move_to(sender, log);
    }
}
