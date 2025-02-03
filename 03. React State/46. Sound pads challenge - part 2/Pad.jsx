import React from "react";

export default function Pad(props) {
	return <button key={props.id} style={{backgroundColor: props.color}}></button>;
}