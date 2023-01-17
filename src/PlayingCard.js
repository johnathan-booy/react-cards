import React, { useState } from "react";
import backOfCard from "./back.png";
import useFlip from "./hooks/useFlip";
import "./PlayingCard.css";

// useFlip is a custom hook that manages the boolean state of a card's flip.
// It takes an optional initial value (defaults to true) and returns an array containing
// the current state (isFacingUp) and a function (flipCard) to toggle the state.

function PlayingCard({ front, back = backOfCard }) {
	const [isFacingUp, flipCard] = useFlip(true);

	return (
		<img
			src={isFacingUp ? front : back}
			alt="playing card"
			onClick={flipCard}
			className="PlayingCard Card"
		/>
	);
}

export default PlayingCard;
