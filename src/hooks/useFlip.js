import React, { useState } from "react";

// useFlip is a custom hook that manages the boolean state of a card's flip.
// It takes an optional initial value (defaults to true) and returns an array containing
// the current state (isFacingUp) and a function (flipCard) to toggle the state.

const useFlip = (initialValue = true) => {
	const [isFacingUp, setIsFacingUp] = useState(initialValue);

	const flipCard = () => {
		setIsFacingUp((isUp) => !isUp);
	};

	return [isFacingUp, flipCard];
};

export default useFlip;
