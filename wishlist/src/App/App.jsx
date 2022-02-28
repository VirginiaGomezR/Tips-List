import React, { useState } from "react";
import "./App.css";
import WishInput from "./WishInput/WishInput";
import WishList from "./WishList/WishList";
import initialTips from "./services/initialTips";

const App = () => {
    const [wishes, setWishes] = useState(initialTips);

    return (
        <div className="app">
            <h1>Tips para mejorar el planeta</h1>
            <WishInput onNewWish={(wish) => setWishes([wish, ...wishes])} />
            <WishList wishes={wishes} onWishesChange={setWishes} />
            <button
                className="wish-clear"
                type="button"
                onClick={() => setWishes(wishes.filter((wish) => !wish.done))}
            >
                ¡Hecho!
            </button>
        </div>
    );
};

export default App;
