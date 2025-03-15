import "./App.css";

const loadScript = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve();
    };
    script.onerror = (error) => {
      reject(error);
    };
    document.body.appendChild(script);
  });
}
function App() {

  const openRazorPayCheckout = async () => {
    try {
      //1. making request to backend
      const resp = await fetch("http://localhost:3400/checkout", {
        method: "POST",
      });
      const data = await resp.json();
      const order = data.order;

      //2.load razorpay script
      await loadScript();

      //3. create payment object
      const finalOrderObject = {
        key: "rzp_test_VXbCHjS5A3LyAY",
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: order.currency,
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://picsum.photos/200/300",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
        prefill: {
          name: "Adarsh",
          email: "adarsh@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      //4. order create 
      const rzp1 = new Razorpay(finalOrderObject);
      rzp1.open();

      //5. error handling
      rzp1.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      })

    } catch (error) {
      console.error("Error loading razorpay script", error);
    }

  };

  return (
    <>
      <h1>Payment DEMO</h1>
      <button style={{ cursor: "pointer" }} onClick={openRazorPayCheckout}>
        Pay for 100 Rs.
      </button>
    </>
  );
}

export default App;
