const customerModel = require("../../models/customerModel");
const sellerCustomerModel = require("../../models/chat/sellerCustomerModel");
const { responseReturn } = require("../../utiles/response");
const bcrypt = require("bcrypt");

class customerAuthController {
  customer_register = async (req, res) => {
    console.log(req.body);

    const { name, email, password } = req.body;

    try {
      const customer = await customerModel.findOne({ email });
      if (customer) {
        responseReturn(res, 404, { error: "Email Already Exits" });
      } else {
        const createCustomer = await customerModel.create({
          name: name.trim(),
          email: email.trim(),
          password: await bcrypt.hash(password, 10),
          method: "menualy",
        });
        await sellerCustomerModel.create({
          myId: createCustomer.id,
        });
      }
    } catch (error) {
      console.log(error);
      //   responseReturn(res, 500, { error: "Internal Server Error" });
    }
  };

  // End Method
}

module.exports = new customerAuthController();
