module SimpleLogger {
    struct Message has key {
        content: vector<u8>,
    }

    public entry fun log_message(sender: &signer, message: vector<u8>) {
        let msg = Message { content: message };
        move_to(sender, msg);
    }
}
