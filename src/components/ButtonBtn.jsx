import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const ButtonBtn = ({ text, colorClass, icon, onBtnClick }) => (
	<button
		type="button"
		className={`btn btn-block no-border ${colorClass}`}
		onClick={onBtnClick}
	>
		<FontAwesomeIcon className="mr-2" size="lg" icon={icon} />
		{text}
	</button>
);

ButtonBtn.propTypes = {
	text: PropTypes.string,
	colorClass: PropTypes.string,
	icon: PropTypes.element.isRequired,
	onBtnClick: PropTypes.func,
};

ButtonBtn.defaultTypes = {
	text: "新建",
};

export default ButtonBtn;
