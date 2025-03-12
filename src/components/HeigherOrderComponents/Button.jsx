import React from "react";

const withButtonStyles = (WrappedComponent) => {
    return ({ disabled, onClick, variant, color, ...props }) => {
        // Allowed variants & colors
        const allowedVariants = ["fill", "border"];
        const allowedColors = ["primary", "secondary"];

        // Default to "fill" if variant is invalid
        const safeVariant = allowedVariants.includes(variant) ? variant : "fill";

        // Default to "primary" if color is invalid
        const safeColor = allowedColors.includes(color) ? color : "primary";

        const baseStyles = {
            padding: "10px 20px",
            fontSize: "14px",
            borderRadius: "8px",
            cursor: disabled ? "not-allowed" : "pointer",
            minHeight: "35px",
            height: "auto",
            lineHeight: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            border: "1px solid transparent",
        };

        // Color styles
        const colors = {
            primary: {
                background: "#0154aa",
                color: "#fff",
                borderColor: "#0154aa",
            },
            secondary: {
                background: "#f4f4f4",
                color: "#737A91",
                borderColor: "#737A91",
            },
        };

        // Variant-based styles
        const variantStyles = {
            fill: {
                backgroundColor: disabled ? "#ccc" : colors[safeColor].background,
                color: colors[safeColor].color,
            },
            border: {
                backgroundColor: "transparent",
                color: disabled ? "#999" : colors[safeColor].borderColor,
                border: `1px solid ${colors[safeColor].borderColor}`,
                borderRadius: "5px",
            },
        };

        const buttonStyles = { ...baseStyles, ...variantStyles[safeVariant] };

        return (
            <WrappedComponent
                style={buttonStyles}
                onClick={!disabled ? onClick : undefined}
                {...props}
            />
        );
    };
};

// Base Button Component
const Btn = ({ children, ...props }) => {
    return <button {...props}>{children}</button>;
};

// Enhanced Button with HOC
const Button = withButtonStyles(Btn);

export default Button;
