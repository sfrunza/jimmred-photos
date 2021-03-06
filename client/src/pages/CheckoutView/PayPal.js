import React, { useRef, useEffect, useState } from "react";
import { useCartContext } from "src/cart_context";
import { Typography } from "@material-ui/core";

export default function Paypal() {
  const paypal = useRef();
  const [success, setSuccess] = useState(false);
  const { clearCart, cart, total_amount } = useCartContext();

  useEffect(() => {
    var arr = [];
    cart.map((item) => {
      arr.push({
        name: item.name,
        sku: "abc" + item.id,
        unit_amount: {
          currency_code: "USD",
          value: item.price / 100,
        },
        quantity: item.amount,
      });
      return true;
    });

    window.paypal
      .Buttons({
        style: {
          shape: "rect",
          color: "blue",
          layout: "vertical",
          label: "buynow",
        },
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            // application_context: {
            //   shipping_preferences: "SET_PROVIDED_ADDRESS",
            // },
            purchase_units: [
              {
                reference_id: "PUHF",
                description: "Beautiful Photos",

                custom_id: "Photos",
                soft_descriptor: "Great description 1",
                amount: {
                  currency_code: "USD",
                  value: total_amount / 100,
                  breakdown: {
                    item_total: {
                      currency_code: "USD",
                      value: total_amount / 100,
                    },
                  },
                },
                items: arr,
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(function (details) {
            // This function shows a transaction success message to your buyer.
            console.log("details", details);
            setSuccess(true);
            clearCart();
          });
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      {!success ? (
        <div ref={paypal}></div>
      ) : (
        <Typography variant="body1" style={{ color: "#00ab00" }}>
          Purchase Completed, Thank You!
        </Typography>
      )}
    </div>
  );
}
