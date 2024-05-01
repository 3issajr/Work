const Contact = require('../models/contactModel')
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
  };

  exports.addContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);

        if (!newContact.name) {
            throw new Error("Please fill your name");
        }
        if (!newContact.email) {
            throw new Error("Please fill your email");
        }
        if (!newContact.subject) {
            throw new Error("Please fill your subject");
        }
        if (!newContact.message) {
            throw new Error("Please fill your message");
        }
        if (!validateEmail(newContact.email)) {
            throw new Error("Invalid email format");
        }

        await newContact.save();
        res.status(201).json({ message: "Thanks for submitting" });
    } catch (error) {
        console.error("Error adding contact:", error);
        res.status(400).json({ error: error.message });
    }
};
