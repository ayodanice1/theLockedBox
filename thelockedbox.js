
// Create a locked box containing a list ['king', 'ayodanice1'].
// Box must be unlocked before its content can be accessed and locked afterwards.
// Attempts to access its content without first unlocking it 
// throws an exception error 'locked'.
const box = {
    locked : true,
    unlock() { this.locked = false },
    lock() { this.locked = true },
    _content : ['king','ayodanice1'],
    get content() {
        if (this.locked) throw new Error("locked");
        return this._content;
    }
};

// This function gives access to the box content after receiving 'yes' as its argument.
// It throws an error 'Our box is still locked. Unlock first.' if argfument is 'no'.
function withBoxUnlocked(choice) {
    let mybox = Object.create(box);
    if (choice == 'yes') {
        mybox.unlock();
        console.log(mybox.content);
        
        mybox.lock();
        try { console.log(mybox.content); }
        catch (error) { console.log("Our box is now locked."); }
    }
    else {
        if (choice == 'no') {
            try { console.log(mybox.content); }
            catch (error) { console.log("Our box is still locked. Unlock first!"); }
        }
    }
};

// Running from the command-line interface of Node.JS
// The command: $node thelockedbox.js yes
// will unlock the  box and read its content.
// The command: $node thelockedbox.js no
// will lead to an error
let choice = process.argv[2];
withBoxUnlocked(choice);
