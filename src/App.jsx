import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "./assets/zaplogo.png";


function Home() {
  const navigate = useNavigate();

  const boxStyle = {
    height: "20vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: "600",
    cursor: "pointer",
    color: "#000",
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      
    <div style={{
  height: "30vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
}}>
  <img src={logo} alt="ZapMeal Logo" style={{ width: "120px", marginBottom: "10px" }} />
  <div style={{ fontSize: "3rem", fontWeight: "800", color: "#8B5A2B" }}>
    ZapMeal
  </div>
</div>


      <div style={{ ...boxStyle, backgroundColor: "#F5C400" }} onClick={() => navigate("/single")}>
        Single Order
      </div>

      <div style={{ ...boxStyle, backgroundColor: "#8B5A2B" }} onClick={() => navigate("/multi")}>
        Multi Order
      </div>

      <div style={{ ...boxStyle, backgroundColor: "#F5C400" }} onClick={() => navigate("/tiffin")}>
        ZapTiffin
      </div>
    </div>
  );
}

function Single() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
  };

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <div style={{ padding: "1.5rem", maxWidth: "900px", margin: "0 auto" }}>

      <h1 style={{ color: "#8B5A2B" }}>🍔 Single Order</h1>

      {/* restaurant list*/}
      {!selectedRestaurant && !orderPlaced && (
        <>
          <h2>Select a Restaurant</h2>

          {restaurants.map(r => (
            <div
              key={r.id}
              onClick={() => setSelectedRestaurant(r)}
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1rem",
                border: "1px solid #F5C400",
                borderRadius: "12px",
                marginBottom: "1rem",
                cursor: "pointer",
                background: "#fff"
              }}
            >
              <img
                src={r.image}
                style={{
                  width: "90px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />
              <div>
                <strong>{r.name}</strong>
                <p>{r.cuisines.join(", ")}</p>
              </div>
            </div>
          ))}
        </>
      )}

      {/*MENU*/}
      {selectedRestaurant && !orderPlaced && (
        <>
          <button onClick={() => setSelectedRestaurant(null)}>← Back</button>

          <h2 style={{ marginTop: "1rem" }}>{selectedRestaurant.name}</h2>

          {selectedRestaurant.menu.map(item => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.8rem",
                marginBottom: "0.5rem",
                borderBottom: "1px solid #eee"
              }}
            >
              <span>{item.name}</span>
              <span>
                ₹{item.price}
                <button
                  onClick={() => addToCart(item)}
                  style={{
                    marginLeft: "10px",
                    background: "#F5C400",
                    border: "none",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}
                >
                  Add
                </button>
              </span>
            </div>
          ))}
        </>
      )}

      {/*CART*/}
      {cart.length > 0 && !orderPlaced && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "#fff",
            borderTop: "2px solid #F5C400",
            padding: "1rem"
          }}
        >
          <h3>Cart</h3>

          {cart.map((item, idx) => (
            <p key={idx}>{item.name} – ₹{item.price}</p>
          ))}

          <strong>Total: ₹{total}</strong>

          <button
            onClick={() => setOrderPlaced(true)}
            style={{
              display: "block",
              marginTop: "1rem",
              background: "#8B5A2B",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Pay Now
          </button>
        </div>
      )}

      {orderPlaced && (
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <h2>🎉 Order Placed Successfully</h2>
          <p>Your food is being prepared 🍽️</p>
        </div>
      )}
    </div>
  );
}

//func single ordering ends!

/* MENU DATA  */

const northIndianMenu = () => [
  { id: 1, name: "Butter Naan", price: 40, category: "Breads" },
  { id: 2, name: "Paneer Butter Masala", price: 220, category: "Main Course" },
];

const chineseMenu = () => [
  { id: 20, name: "Veg Hakka Noodles", price: 160, category: "Chinese" },
];

const southIndianMenu = () => [
  { id: 40, name: "Masala Dosa", price: 150, category: "South Indian" },
];

/*RESTAURANTS  */

const restaurants = [
  {
    id: 1,
    name: "Urban Tandoor",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    zone: "Mansarovar",
    cuisines: ["North Indian", "Chinese", "South Indian"],
    menu: [...northIndianMenu(), ...chineseMenu(), ...southIndianMenu()],
  },
  {
    id: 2,
    name: "Spice Junction",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    zone: "Mansarovar",
    cuisines: ["North Indian", "Chinese"],
    menu: [...northIndianMenu(), ...chineseMenu()],
  },
  {
    id: 3,
    name: "South Treat",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    zone: "C-Scheme",
    cuisines: ["South Indian"],
    menu: [...southIndianMenu()],
  },
];

/* MULTI PAGE */

function Multi() {
  const [deliveryType, setDeliveryType] = useState("ASAP");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");

  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [location, setLocation] = useState("Fetching location...");
  const [cart, setCart] = useState([]);

  const addToCart = (item, restaurant) => {
    const existing = cart.find(i => i.id === item.id);

    if (existing) {
      setCart(cart.map(i =>
        i.id === item.id
          ? { ...i, qty: (i.qty || 1) + 1 }
          : i
      ));
    } else {
      setCart([
        ...cart,
        { ...item, restaurant: restaurant.name, qty: 1 }
      ]);
    }
  };

  const groupedCart = cart.reduce((acc, item) => {
    if (!acc[item.restaurant]) acc[item.restaurant] = [];
    acc[item.restaurant].push(item);
    return acc;
  }, {});

  const calculateGST = (amount) => amount * 0.05;

  const totalAmount = Object.values(groupedCart).reduce((sum, items) => {
    const subtotal = items.reduce((s, i) => s + (i.price * i.qty), 0);
    return sum + subtotal + calculateGST(subtotal);
  }, 0);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Location unavailable");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation(`Lat ${pos.coords.latitude.toFixed(2)}, Lon ${pos.coords.longitude.toFixed(2)}`);
      },
      () => setLocation("Location unavailable")
    );
  }, []);

  const searchResults = restaurants.filter((r) => {
    const matchSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.menu.some((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

    const matchCuisine = selectedCuisine
      ? r.cuisines.includes(selectedCuisine)
      : true;

    return matchSearch && matchCuisine;
  });

  const nearbyKitchens = selectedRestaurant
    ? restaurants.filter(
        (r) =>
          r.zone === selectedRestaurant.zone &&
          r.id !== selectedRestaurant.id
      )
    : [];
  
  const estimateDeliveryTime = () => {
  return 20 + Math.floor(Math.random() * 10);
};


  return (
    <div style={{
  padding: "1rem",
  maxWidth: "900px",
  margin: "0 auto",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
}}>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <strong>📍 {location}</strong>
        <div style={{ fontSize: "1.5rem" }}>👤</div>
      </div>

      <h1 style={{
  color: "#8B5A2B",
  fontWeight: "800",
  borderBottom: "3px solid #F5C400",
  paddingBottom: "5px"
}}>
  Multi-Order
</h1>


      {!selectedRestaurant && (
        <>
          <input
            placeholder="Search restaurants or dishes"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "100%", padding: "0.9rem", borderRadius: "10px", border: "1px solid #ddd", marginBottom: "1rem" }}
          />

          <h3>Suggested Restaurants</h3>



          {searchResults.map((r) => (
            <div
              key={r.id}
              onClick={() => setSelectedRestaurant(r)}
              style={{
                display: "flex",
                gap: "1rem",
                padding: "0.8rem",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                marginBottom: "1rem",
                cursor: "pointer",
                background: "#fff9e6",
                border: "1px solid #F5C400"
              }}
            >
              <img src={r.image} style={{ width: "90px", height: "80px", borderRadius: "10px", objectFit: "cover" }} />
              <div>
                <strong>{r.name}</strong>
                <p>{r.cuisines.join(", ")}</p>
              </div>
            </div>
          ))}
        </>
      )}

      {selectedRestaurant && (
        <>
          <button onClick={() => setSelectedRestaurant(null)}>← Back</button>
          <h2>{selectedRestaurant.name}</h2>

          {[...new Set(selectedRestaurant.menu.map(i => i.category))].map((cat) => (
            <div key={cat} style={{ marginTop: "1.5rem" }}>
              <h3>{cat}</h3>

              {selectedRestaurant.menu
                .filter((i) => i.category === cat)
                .map((item) => (
                  <div key={item.id} style={{
  marginLeft: "10px",
  backgroundColor: "#F5C400",
  color: "#000",
  fontWeight: "700",
  border: "none",
  padding: "6px 12px",
  borderRadius: "6px",
  cursor: "pointer",
  boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
}}
>
                    <span>{item.name}</span>
                    <span>
                      ₹{item.price}
                      <button onClick={() => addToCart(item, selectedRestaurant)} style={{ marginLeft: "10px", backgroundColor: "#F5C400", border: "none", padding: "5px 10px", borderRadius: "6px", cursor: "pointer" }}>
                        Add
                      </button>
                    </span>
                  </div>
                ))}
            </div>
          ))}

          {nearbyKitchens.length > 0 && (
            <div style={{ marginTop: "2rem" }}>
              <h3>Add more from nearby kitchens</h3>
              {nearbyKitchens.map((r) => (
                <div key={r.id} style={{ padding: "0.5rem 0", cursor: "pointer", color: "#F5C400" }} onClick={() => setSelectedRestaurant(r)}>
                  {r.name}
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {cart.length > 0 && (
        <button
          onClick={() => setShowCart(!showCart)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#F5C400",
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          View Cart ({cart.length})
        </button>
      )}

      {showCart && (
  <div style={{
    marginTop: "2rem",
    background: "#fff9e6",
    color: "#000",
    padding: "1rem",
    borderRadius: "10px",
    border: "1px solid #F5C400",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  }}>

          <h2>Unified Bill</h2>

          {Object.entries(groupedCart).map(([restaurant, items]) => {
            const subtotal = items.reduce((s, i) => s + (i.price * i.qty), 0);
            const gst = calculateGST(subtotal);

            return (
              <div key={restaurant} style={{ marginBottom: "1rem", borderBottom: "1px dashed #444", paddingBottom: "1rem" }}>
                <h3>{restaurant}</h3>

                {items.map((item, idx) => (
                  <p key={idx}>
                    {item.name} x{item.qty} — ₹{item.price * item.qty}
                    <button
                      onClick={() => setCart(cart.filter(i => i.id !== item.id))}
                      style={{
                        marginLeft: "10px",
                        background: "red",
                        color: "#fff",
                        border: "none",
                        padding: "3px 8px",
                        borderRadius: "5px",
                        cursor: "pointer"
                      }}
                    >
                      X
                    </button>
                  </p>
                ))}

                <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
                <p>GST (5%): ₹{gst.toFixed(2)}</p>
              </div>
            );
          })}

          <p>Estimated Delivery: {estimateDeliveryTime()} mins</p>

          <div style={{ marginTop: "1rem" }}>
  <h3>Delivery Option</h3>

  <label style={{ display: "block", marginBottom: "0.5rem" }}>
    <input
      type="radio"
      value="ASAP"
      checked={deliveryType === "ASAP"}
      onChange={() => setDeliveryType("ASAP")}
    />
    Deliver ASAP
  </label>

  <label style={{ display: "block", marginBottom: "0.5rem" }}>
    <input
      type="radio"
      value="SCHEDULE"
      checked={deliveryType === "SCHEDULE"}
      onChange={() => setDeliveryType("SCHEDULE")}
    />
    Schedule Delivery
  </label>

  {deliveryType === "SCHEDULE" && (
    <div style={{ marginTop: "1rem" }}>
      <input
        type="date"
        value={scheduledDate}
        onChange={(e) => setScheduledDate(e.target.value)}
        style={{ marginRight: "10px", padding: "6px" }}
      />
      <input
        type="time"
        value={scheduledTime}
        onChange={(e) => setScheduledTime(e.target.value)}
        style={{ padding: "6px" }}
      />
    </div>
  )}
</div>

          <h2>Total Payable: ₹{totalAmount.toFixed(2)}</h2>

          <button
            style={{
              background: "#F5C400",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "1rem"
            }}
            onClick={() => {
  if (deliveryType === "SCHEDULE" && scheduledDate && scheduledTime) {
    alert(`Order Scheduled 🎉\nDelivery on: ${scheduledDate} at ${scheduledTime}`);
  } else {
    alert("Payment Successful 🎉\nYour order is on the way 🚀");
  }
}}

          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

function Tiffin() {
  //subs plans

  const TIFFIN_PLANS = [
    { id: "weekly-basic", name: "Weekly Basic", price: 99, duration: "Weekly" },
    { id: "weekly-premium", name: "Weekly Premium", price: 199, duration: "Weekly" },
    { id: "monthly-basic", name: "Monthly Basic", price: 149, duration: "Monthly" },
    { id: "monthly-premium", name: "Monthly Premium", price: 299, duration: "Monthly" },
  ];

  

  const [step, setStep] = useState("PLAN"); // PLAN → SETUP → CONFIRMED → MEALS
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [startDate, setStartDate] = useState("");

  const [activeDay, setActiveDay] = useState("Day1");
  const [activeMeal, setActiveMeal] = useState("Breakfast");

  const [mealCart, setMealCart] = useState({
    Day1: { Breakfast: [], Lunch: [], Dinner: [] },
    Day2: { Breakfast: [], Lunch: [], Dinner: [] },
  });

  //food data and images

  const FOOD_ITEMS = [
    {
      id: 1,
      name: "Paneer Paratha",
      restaurant: "Urban Tandoor",
      price: 80,
      image: "https://images.unsplash.com/photo-1626078436898-1f7b7d64d795",
    },
    {
      id: 2,
      name: "Masala Dosa",
      restaurant: "South Treat",
      price: 120,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    },
    {
      id: 3,
      name: "Veg Sandwich",
      restaurant: "Cafe Brew",
      price: 90,
      image: "https://images.unsplash.com/photo-1553909489-cd47e0907980",
    },
    {
      id: 4,
      name: "Poha",
      restaurant: "HomeStyle Kitchen",
      price: 60,
      image: "https://images.unsplash.com/photo-1628294896516-344152572ee5",
    },
  ];


  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ color: "#8B5A2B" }}>🍱 ZapTiffin</h1>

      {/* subscription plans*/}
      {step === "PLAN" && (
        <>
          <h2>Choose Your Plan</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginTop: "1.5rem",
            }}
          >
            {TIFFIN_PLANS.map((plan) => (
              <div
                key={plan.id}
                style={{
                  border: "2px solid #F5C400",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  background: "#fff",
                }}
              >
                <h3>{plan.name}</h3>
                <p>Breakfast + Lunch + Dinner</p>
                <h2>₹{plan.price}</h2>

                <button
                  onClick={() => {
                    setSelectedPlan(plan);
                    setStep("SETUP");
                  }}
                  style={{
                    background: "#F5C400",
                    border: "none",
                    padding: "10px 18px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </>
      )}


      {step === "SETUP" && selectedPlan && (
        <>
          <h2 style={{ marginTop: "2rem" }}>{selectedPlan.name}</h2>

          <div style={{ marginTop: "1rem" }}>
            <label>Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              style={{ marginLeft: "10px", padding: "6px" }}
            />
          </div>

          <button
            onClick={() => setStep("CONFIRMED")}
            style={{
              marginTop: "1.5rem",
              background: "#F5C400",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Activate Subscription
          </button>
        </>
      )}

      {step === "CONFIRMED" && (
        <>
          <h2 style={{ marginTop: "2rem", color: "#8B5A2B" }}>
            ✅ Subscription Confirmed
          </h2>

          <p style={{ marginTop: "0.5rem", maxWidth: "600px" }}>
            Your ZapTiffin subscription is active. Now customize your meals for
            today — breakfast, lunch, and dinner can be from different
            restaurants.
          </p>

          <button
            onClick={() => setStep("MEALS")}
            style={{
              marginTop: "1.5rem",
              background: "#8B5A2B",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: "10px",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Customize Today’s Meals →
          </button>
        </>
      )}

      {/* MEALS */}
      {step === "MEALS" && (
        <>
          <h2 style={{ marginTop: "2rem" }}>Customize Your Meals</h2>

          {/* Day changes */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            {["Day1", "Day2"].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "20px",
                  border: "none",
                  fontWeight: "600",
                  background: activeDay === day ? "#F5C400" : "#eee",
                }}
              >
                {day}
              </button>
            ))}
          </div>

          {/* MEAL TABS */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
            {["Breakfast", "Lunch", "Dinner"].map((meal) => (
              <button
                key={meal}
                onClick={() => setActiveMeal(meal)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "20px",
                  border: "none",
                  fontWeight: "600",
                  background: activeMeal === meal ? "#8B5A2B" : "#eee",
                  color: activeMeal === meal ? "#fff" : "#000",
                }}
              >
                {meal}
              </button>
            ))}
          </div>

          {/* FOOD GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: "1rem",
            }}
          >
            {FOOD_ITEMS.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  padding: "10px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <h4>{item.name}</h4>
                <p style={{ fontSize: "0.85rem" }}>{item.restaurant}</p>
                <strong>₹{item.price}</strong>

                <button
                  onClick={() => {
                    setMealCart((prev) => ({
                      ...prev,
                      [activeDay]: {
                        ...prev[activeDay],
                        [activeMeal]: [...prev[activeDay][activeMeal], item],
                      },
                    }));
                  }}
                  style={{
                    marginTop: "6px",
                    background: "#F5C400",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Add
                </button>
              </div>
            ))}
          </div>

          {/* SAVE MEAL */}
          <button
            style={{
              marginTop: "2rem",
              background: "#8B5A2B",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "12px",
              border: "none",
              fontWeight: "700",
            }}
            onClick={() => {
              if (activeMeal === "Breakfast") setActiveMeal("Lunch");
              else if (activeMeal === "Lunch") setActiveMeal("Dinner");
              else alert("Meals saved for this day ✅");
            }}
          >
            Save {activeMeal}
          </button>
          {/*MEAL SUMMARY  */}
<div style={{
  marginTop: "2.5rem",
  padding: "1.5rem",
  background: "#fff",
  borderRadius: "14px",
  border: "2px solid #F5C400"
}}>
  <h3 style={{ color: "#8B5A2B" }}>
    🧾 Today’s Meal Summary
  </h3>

  {["Day1", "Day2"].map(day => (
    <div key={day} style={{ marginTop: "1.2rem" }}>
      <h4>{day}</h4>

      {["Breakfast", "Lunch", "Dinner"].map(meal => (
        <div key={meal} style={{ marginLeft: "1rem", marginBottom: "0.5rem" }}>
          <strong>{meal}:</strong>

          {mealCart[day][meal].length === 0 ? (
            <span style={{ opacity: 0.6 }}> No items selected</span>
          ) : (
            <ul>
              {mealCart[day][meal].map((item, idx) => (
                <li key={idx}>
                  {item.name} — ₹{item.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  ))}
</div>

<button
  onClick={() => setStep("BILLING")}
  style={{
    marginTop: "2rem",
    background: "#F5C400",
    padding: "14px 26px",
    borderRadius: "14px",
    border: "none",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer"
  }}
>
  Proceed to Today’s Billing →
</button>





        </>
        
      )} 
  
      {step === "BILLING" && (
  <div style={{
    marginTop: "2rem",
    padding: "2rem",
    background: "#fff",
    borderRadius: "16px",
    border: "2px solid #8B5A2B"
  }}>
    <h2 style={{ color: "#8B5A2B" }}>🧾 Today’s Billing</h2>

    {["Day1", "Day2"].map(day => {
      const dayItems = Object.values(mealCart[day]).flat();
      const dayTotal = dayItems.reduce((sum, item) => sum + item.price, 0);

      return (
        <div key={day} style={{ marginTop: "1.5rem" }}>
          <h3>{day}</h3>

          {["Breakfast", "Lunch", "Dinner"].map(meal => (
            <div key={meal} style={{ marginLeft: "1rem" }}>
              <strong>{meal}</strong>
              <ul>
                {mealCart[day][meal].map((item, idx) => (
                  <li key={idx}>
                    {item.name} — ₹{item.price}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p style={{ fontWeight: "700" }}>Day Total: ₹{dayTotal}</p>
        </div>
      );
    })}

    <hr style={{ margin: "1.5rem 0" }} />

    <h2>
      Grand Total: ₹{
        ["Day1", "Day2"]
          .map(day =>
            Object.values(mealCart[day]).flat().reduce((s, i) => s + i.price, 0)
          )
          .reduce((a, b) => a + b, 0)
      }
    </h2>

    <button
      style={{
        marginTop: "1.5rem",
        background: "#8B5A2B",
        color: "#fff",
        padding: "14px 26px",
        borderRadius: "14px",
        border: "none",
        fontWeight: "700",
        cursor: "pointer"
      }}
      onClick={() => alert("Today’s meals billed successfully ✅")}
    >
      Confirm & Pay
    </button>
  </div>
)}

    </div>
  );
}
//function tiffin ends



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/single" element={<Single />} />
      <Route path="/multi" element={<Multi />} />
      <Route path="/tiffin" element={<Tiffin />} />


    </Routes>
  );
}
